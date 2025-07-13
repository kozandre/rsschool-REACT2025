import { Component } from 'react';
import type { ResultItemProps } from '../../types';
import classes from './ResultsItem.module.scss';

class ResultItem extends Component<ResultItemProps> {
  render() {
    return (
      <li className={classes.resultItem}>
        <p className={classes.itemName}>{this.props.name}</p>
        <p className={classes.itemDescription}>
          <span>Gender: {this.props.gender}</span>
          <span>Marital status: {this.props.maritalStatus}</span>
          <span>Month of birth: {this.props.monthOfBirth}</span>
          <span>Year of birth: {this.props.yearOfBirth}</span>
          <span>Month of death: {this.props.monthOfDeath}</span>
          <span>Year of death: {this.props.yearOfDeath}</span>
        </p>
      </li>
    );
  }
}

export default ResultItem;
