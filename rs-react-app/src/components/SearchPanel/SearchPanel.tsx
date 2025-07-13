import { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import classes from './SearchPanel.module.scss';
import type { Character } from '../../types';

interface SearchPanelState {
  results: Character[];
}

class SearchPanel extends Component<{}, SearchPanelState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      results: [],
    };
  }

  handleSearchResults = (characters: Character[]) => {
    this.setState({ results: characters });
  };

  render() {
    return (
      <section className={classes.searchPanel}>
        <h2>Top controls</h2>
        <SearchForm onSearch={this.handleSearchResults} />
      </section>
    );
  }
}

export default SearchPanel;
