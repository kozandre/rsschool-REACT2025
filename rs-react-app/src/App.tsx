import { Component } from 'react';
import './App.css';
import SearchPanel from './components/SearchPanel/SearchPanel';
import Results from './components/Results/Results';
import type { Character } from './types';

class App extends Component {
  state = {
    characters: [] as Character[],
  };

  handleSearchResults = (characters: Character[]) => {
    this.setState({ characters });
  };

  render() {
    return (
      <div className="app-container">
        <SearchPanel onSearch={this.handleSearchResults} />
        <Results characters={this.state.characters} />
      </div>
    );
  }
}

export default App;
