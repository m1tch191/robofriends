import React from "react";

class ErrorBoundry extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        };
    }

    componentDidCatch(error) {
        this.setState({ hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <h1>oooops that is not good!</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundry;