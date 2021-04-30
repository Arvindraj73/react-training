import React from 'react';
class Clock extends React.Component {
    //will be called first
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    //will be called once the component is rendered
    //it calls tick every 2 seconds
    componentDidMount() {
        console.log("mounted");
        this.timerID = setInterval(
            () => this.tick(),
            2000
        );
    }

    //will be called after the state change
    componentDidUpdate() {
        console.log(this.timerID);
        console.log("time updated");
    }

    //will be called before the deletion of component
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    //changes the state with current time
    tick() {
        this.setState({
            date: new Date()
        });
    }

    //called after constructor
    //also will be called when the state changes
    render() {
        console.log("render");
        return (
            <div>
                <h1>Hello, World</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Clock;