import { Component } from 'react';
import './App.css';
import SearchPanel from './components/SearchPanel/SearchPanel';
import ResultList from './components/ResultList/ResultList';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <SearchPanel />
        <ResultList />
      </div>
    );
  }
}

export default App;
