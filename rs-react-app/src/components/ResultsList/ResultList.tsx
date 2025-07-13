import { Component } from 'react';
import classes from './ResultsList.module.scss';
import ResultItem from '../ResultsItem/ResultsItem';
import type { ResultListProps } from '../../types';

class ResultList extends Component<ResultListProps> {
  render() {
    return (
      <section>
        <ul className={classes.resultList}>
          <li className={classes.resultListLegend}>
            <span>Item name</span>
            <span>Item description</span>
          </li>
          {this.props.items.map((character) => (
            <ResultItem
              key={character.uid}
              name={character.name}
              gender={character.gender || 'Unknown'}
              maritalStatus={character.maritalStatus || 'Unknown'}
              monthOfBirth={character.monthOfBirth || 'Unknown'}
              yearOfBirth={character.yearOfBirth || 'Unknown'}
              monthOfDeath={character.monthOfDeath || 'Unknown'}
              yearOfDeath={character.yearOfDeath || 'Unknown'}
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default ResultList;
