import React from 'react';
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        console.log("mounted");
        this.timerID = setInterval(
            () => this.tick(),
            2000
        );
    }

    componentDidUpdate() {
        console.log(this.timerID);
        console.log("time updated");
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div>
                <h1>Hello, World</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Clock;