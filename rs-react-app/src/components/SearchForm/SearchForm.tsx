import { Component } from 'react';
import classes from './SearchForm.module.scss';
import type { SearchFormProps, SearchFormState } from '../../types';
import Spinner from '../Spinner/Spinner';

class SearchForm extends Component<SearchFormProps, SearchFormState> {
  constructor(props: SearchFormProps) {
    super(props);

    this.state = {
      value: this.getSavedSearchTerm(),
      isLoading: false,
      error: null,
    };
  }

  componentDidMount(): void {
    if (this.state.value) {
      this.handleSearch(this.state.value);
    } else {
      this.handleSearch('');
    }
  }

  getSavedSearchTerm = (): string => {
    try {
      return localStorage.getItem('searchTerm') || '';
    } catch (error) {
      console.error('Error accessing localStorage:', error);
      return '';
    }
  };

  saveSearchTerm = (term: string): void => {
    try {
      localStorage.setItem('searchTerm', term.trim());
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ value: event.target.value });
  };

  searchCharacters = async (searchTerm: string) => {
    const searchParams = new URLSearchParams();
    if (searchTerm.trim()) {
      searchParams.append('name', searchTerm.trim());
    }
    searchParams.append('pageSize', '20');
    searchParams.append('sort', 'name,ASC');

    try {
      const response = await fetch(
        'https://stapi.co/api/v1/rest/character/search',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: searchParams,
        }
      );

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      return data.characters || [];
    } catch (error) {
      console.error('Search error:', error);
      throw error;
    }
  };

  handleSearch = async (searchTerm: string) => {
    this.setState({ isLoading: true, error: null });

    try {
      const characters = await this.searchCharacters(searchTerm);

      if (characters.length === 0) {
        this.setState({ error: 'No characters found. Try a different name.' });
      } else {
        this.props.onSearch(characters);
      }
    } catch (error) {
      this.setState({
        error: 'Failed to search characters. Please try again.',
      });
      throw error;
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const processedTerm = this.state.value.trim();
    this.saveSearchTerm(processedTerm);
    await this.handleSearch(processedTerm);
  };

  render() {
    const { value, isLoading, error } = this.state;

    return isLoading ? (
      <Spinner />
    ) : (
      <form className={classes.form} onSubmit={this.handleSubmit}>
        <label>
          Search:
          <input
            type="text"
            value={value}
            onChange={this.handleChange}
            placeholder="Spock, Picard...."
            disabled={isLoading}
          />
        </label>
        <input type="submit" value="Search" disabled={isLoading} />
        {error && <p>{error}</p>}
      </form>
    );
  }
}

export default SearchForm;
