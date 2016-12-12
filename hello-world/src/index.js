import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';


function formatDate(date) {
    return date.toLocaleDateString();
}

function Avatar(props) {
    return (
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name} />
    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>);
}

const comment = {
    date: new Date(),
    text: 'test a text',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
};

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            otherData: 121
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => {
                this.tick();
                console.log(this.state.otherData);
            },
            1000
        );
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
            <div>
                <h1>Hello, world</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>    
        </div>);
    }
}

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        // This binding is necessary to make 'this' of Toggle work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

        console.log('Toggle - This is: ', this);
        this.setState(preState => (
            {isToggleOn: !preState.isToggleOn}
        ));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}


class LoggingButton extends React.Component {
    handleClick = (e) => {
        // Clear default behavior
        e.preventDefault();
        // This syntax ensures 'this'
        console.log('LoggingButton - This is:', this);
    }

    render() {
        return (
            // Without using 'bind' in the property initializer, 'this' refers to the button scope now
            <button onClick={(e) => this.handleClick(e) }>
                Click me
            </button>
        );
    }
}


function App() {
    return (
        <div>
            <Clock />
            <Toggle />
            <br />
            <LoggingButton />
        </div>);
}

ReactDOM.render(
    <App />, 
    document.getElementById("root")
);
