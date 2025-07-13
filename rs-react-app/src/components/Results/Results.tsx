import { Component } from 'react';
import ResultList from '../ResultsList/ResultList';
import ErrorButton from '../ErrorButton/ErrorButton';
import classes from './Results.module.scss';
import type { ResultsProps } from '../../types';

class Results extends Component<ResultsProps> {
  render() {
    return (
      <section className={classes.resultsContainer}>
        <h2>Results</h2>
        <ResultList items={this.props.characters} />
        <ErrorButton />
      </section>
    );
  }
}

export default Results;
