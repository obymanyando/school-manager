import React from 'react'
import ErrorIndicator from "./ErrorIndicator";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch() {
        // You can also log the error to an error reporting service
        this.setState({
            hasError: true
        })
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <ErrorIndicator/>
        }

        return this.props.children;
    }
}
