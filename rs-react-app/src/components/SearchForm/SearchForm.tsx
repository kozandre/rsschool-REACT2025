import { Component } from 'react';
import classes from './SearchForm.module.scss';
import type { SearchFormProps, SearchFormState } from '../../types';

class SearchForm extends Component<SearchFormProps, SearchFormState> {
  constructor(props: SearchFormProps) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  render() {
    return (
      <form className={classes.form} onSubmit={this.handleSubmit}>
        <label>
          Search:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default SearchForm;
