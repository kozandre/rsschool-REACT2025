import { Component } from 'react';
import reactLogo from '../../assets/react.svg';
import classes from './Spinner.module.scss';

class Spinner extends Component {
  render() {
    return (
      <div className={classes.spinnerWrapper}>
        <img src={reactLogo} className={classes.reactLogo} alt="React logo" />
      </div>
    );
  }
}

export default Spinner;
