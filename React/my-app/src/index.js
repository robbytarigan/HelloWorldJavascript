import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date(), counter : 1};
    }

    tick() {
        this.setState((prevState, props) => ({
            date: new Date(),
            counter: prevState.counter + props.increment
        }));
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <FormattedDate date={this.state.date} />
                <h2>Current Counter is {this.state.counter}. increment={this.props.increment}</h2>
            </div>
        );
    }
}

function FormattedDate(props) {
    return (
        <h2>It is formatted {props.date.toLocaleTimeString()}.</h2>
    );
}

function App() {
    return (
        <div>
            <Clock increment={0}/>
            <Clock increment={1}/>
            <Clock increment={2}/>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

registerServiceWorker();
