import { Component } from 'react';
import classes from './ResultsList.module.scss';
import ResultItem from '../ResultsItem/ResultsItem';
import type { ResultListProps } from '../../types';

class ResultList extends Component<ResultListProps> {
  render() {
    return (
      <section>
        <div className={classes.resultListLegend}>
          <span>Item name</span>
          <span>Item description</span>
        </div>
        <div className={classes.resultList}>
          {this.props.items.map((character) => (
            <ResultItem
              key={character.uid}
              name={character.name || 'Nameless'}
              description={character.species || 'Unknown'}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default ResultList;
