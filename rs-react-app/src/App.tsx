import { Component } from 'react';
import './App.css';
import SearchPanel from './components/SearchPanel/SearchPanel';
import Results from './components/Results/Results';
import type { Character } from './types';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    characters: [] as Character[],
  };

  handleSearchResults = (characters: Character[]): void => {
    this.setState({ characters });
  };

  render() {
    return (
      <div className="app-container">
        <ErrorBoundary>
          <SearchPanel onSearch={this.handleSearchResults} />
          <Results characters={this.state.characters} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
