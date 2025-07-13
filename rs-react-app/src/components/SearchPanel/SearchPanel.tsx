import { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import classes from './SearchPanel.module.scss';
import type { SearchPanelProps } from '../../types';

class SearchPanel extends Component<SearchPanelProps> {
  render() {
    return (
      <section className={classes.searchPanel}>
        <h2>Star Trek characters</h2>
        <SearchForm onSearch={this.props.onSearch} />
      </section>
    );
  }
}

export default SearchPanel;
