import { Component, ReactNode, Suspense } from 'react';
import { PageError } from 'widgets/PageError';

interface IErrorBoundaryProps {
  children: ReactNode;
}

interface IErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.log(error);
  }

  render() {
    console.log(this.state);
    
    if (this.state.hasError) {
      return <Suspense fallback=''><PageError /></Suspense>
    }

    return this.props.children;
  }
}