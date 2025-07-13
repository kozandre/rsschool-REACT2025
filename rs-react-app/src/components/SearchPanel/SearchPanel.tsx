import { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import classes from './SearchPanel.module.scss';
class SearchPanel extends Component {
  render() {
    return (
      <section className={classes.searchPanel}>
        <h2>Top controls</h2>
        <SearchForm />
      </section>
    );
  }
}

export default SearchPanel;
