import { Component } from 'react';
import classes from './ResultList.module.scss';
import ResultItem from '../ResultItem/ResultItem';
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
          {this.props.items.map((item, index) => (
            <ResultItem
              key={index}
              name={item.name}
              description={item.description}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default ResultList;
