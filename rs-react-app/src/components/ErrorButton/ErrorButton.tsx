import { Component } from 'react';
import classes from './ErrorButton.module.scss';

class ErrorButton extends Component {
  state = {
    shouldThrow: false,
  };

  errorHandler = (): void => {
    this.setState({ shouldThrow: true });
  };

  render() {
    if (this.state.shouldThrow) {
      throw new Error('Error thrown from ErrorButton');
    }

    return (
      <button className={classes.errorButton} onClick={this.errorHandler}>
        Error Button
      </button>
    );
  }
}

export default ErrorButton;
