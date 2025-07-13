import { Component } from 'react';
import classes from './SearchForm.module.scss';
import type { SearchFormProps, SearchFormState } from '../../types';

class SearchForm extends Component<SearchFormProps, SearchFormState> {
  constructor(props: SearchFormProps) {
    super(props);

    this.state = {
      value: '',
      isLoading: false,
      error: null,
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value });
  };

  searchCharacters = async (searchParams: URLSearchParams) => {
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
      console.log(data.characters);
      return data.characters || [];
    } catch (error) {
      console.error('Search error:', error);
      throw error;
    }
  };

  handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { value } = this.state;

    if (!value.trim()) {
      this.setState({ error: 'Please enter a character name' });
      return;
    }

    this.setState({ isLoading: true, error: null });

    try {
      const searchParams = new URLSearchParams();
      searchParams.append('name', value);
      searchParams.append('pageSize', '20');
      searchParams.append('sort', 'name,ASC');

      const characters = await this.searchCharacters(searchParams);

      if (characters.length === 0) {
        this.setState({ error: 'No characters found. Try a different name.' });
      } else {
        this.props.onSearch(characters);
      }
    } catch (error) {
      this.setState({
        error: 'Failed to search characters. Please try again.',
      });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { value, isLoading, error } = this.state;

    return (
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
        <input
          type="submit"
          value={isLoading ? 'Searching...' : 'Search'}
          disabled={isLoading}
        />
        {error && <div className={classes.error}>{error}</div>}
      </form>
    );
  }
}

export default SearchForm;
