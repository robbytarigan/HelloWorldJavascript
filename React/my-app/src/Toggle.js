import React from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback or use arrow function like here
        this.handleClick = this.handleClick;
    }

    handleClick = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render() {
        return (
            <button onClick={this.handleClick.bind(this)}>
                {this.state.isToggleOn? 'ON' : 'OFF'}
            </button>
        );
    }
}

export default Toggle;