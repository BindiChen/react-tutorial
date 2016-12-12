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

function App() {
    return (
        <div>
            <Clock />
            <Clock />
            <Clock />
        </div>);
}

ReactDOM.render(
    <App />, 
    document.getElementById("root")
);
