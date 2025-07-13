import { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';

class SearchPanel extends Component {
  render() {
    return (
      <section>
        <h2>Top controls</h2>
        <SearchForm />
      </section>
    );
  }
}

export default SearchPanel;
