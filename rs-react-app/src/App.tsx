import { Component } from 'react';
import './App.css';
import SearchPanel from './components/SearchPanel/SearchPanel';
import Results from './components/Result/Result';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <SearchPanel />
        <Results />
      </div>
    );
  }
}

export default App;
