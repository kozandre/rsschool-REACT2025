import { Component, type ErrorInfo, type ReactNode } from 'react';
import type { ErrorBoundaryProps, ErrorBoundaryState } from '../../types';
import classes from './ErrorBoundary.module.scss';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ error, errorInfo });
    console.error('Error Boundary caught:', error, errorInfo);
  }

  handleReset = (): void => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className={classes.errorFallback}>
          <h2>Something went wrong!</h2>
          <details>
            <summary>Details</summary>
            <p>
              {this.state.error?.toString()}
              {this.state.errorInfo?.componentStack}
            </p>
          </details>
          <button onClick={this.handleReset}>Try to recover</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
