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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
  }

  async handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { value } = this.state;

    if (!value.trim()) {
      this.setState({ error: 'Please enter a Star Trek character name' });
      return;
    }

    this.setState({ isLoading: true, error: null });

    try {
      const response = await fetch(
        `https://stapi.co/api/v1/rest/character/search?name=${encodeURIComponent(value)}`
      );
      const data = await response.json();

      if (data.characters) {
        this.props.onSearch(data.characters);
      } else {
        this.setState({ error: 'No characters found' });
      }
    } catch (error) {
      this.setState({ error: 'Failed to fetch from STAPI' });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { value, isLoading, error } = this.state;

    return (
      <form className={classes.form} onSubmit={this.handleSubmit}>
        <label>
          Search Star Trek characters:
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
