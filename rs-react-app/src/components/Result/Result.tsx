import { Component } from 'react';
import ResultList from '../ResultList/ResultList';
import ErrorButton from '../ErrorButton/ErrorButton';
import classes from './Result.module.scss';

const tests = [
  { name: 'Item 1', description: 'Description 1' },
  { name: 'Item 2', description: 'Description 2' },
];
class Results extends Component {
  render() {
    return (
      <section className={classes.resultsContainer}>
        <h2>Results</h2>
        <ResultList items={tests} />
        <ErrorButton />
      </section>
    );
  }
}

export default Results;
