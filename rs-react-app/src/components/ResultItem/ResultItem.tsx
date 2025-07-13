import { Component } from 'react';
import type { ResultItemProps } from '../../types';
import classes from './ResultItem.module.scss';

class ResultItem extends Component<ResultItemProps> {
  render() {
    return (
      <div className={classes.resultItem}>
        <div className="item-name">{this.props.name}</div>
        <div className="item-description">{this.props.description}</div>
      </div>
    );
  }
}

export default ResultItem;
