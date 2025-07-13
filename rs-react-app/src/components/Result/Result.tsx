import { Component } from 'react';
import ResultList from '../ResultList/ResultList';
import ErrorButton from '../ErrorButton/ErrorButton';

class Results extends Component {
  render() {
    return (
      <section className="results-container">
        <h2>Results</h2>
        <ResultList />
        <ErrorButton />
      </section>
    );
  }
}

export default Results;
