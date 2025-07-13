import { Component } from 'react';
import classes from './ErrorButton.module.scss';

class ErrorButton extends Component {
  constructor(props: {}) {
    super(props);
    this.errorHandler = this.errorHandler.bind(this);
  }

  errorHandler = () => {
    throw new Error();
  };

  render() {
    return (
      <button className={classes.errorButton} onClick={this.errorHandler}>
        Error Button
      </button>
    );
  }
}

export default ErrorButton;
