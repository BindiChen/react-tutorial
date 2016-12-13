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


class LoginButton extends React.Component {
    handleClick = (e) => {
        // Clear default behavior
        e.preventDefault();
        // This syntax ensures 'this'
        console.log('LoginButton - This is:', this);
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


/**
 * Conditional Rendering
 */
function UserGreeting(props) {
    return (
        <h1>Welcome back!</h1>
    );
}

function GuestGreeting(props) {
    return (
        <h1>Please sign up.</h1>
    );
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }

    return <GuestGreeting />;
}


function LoginBtn(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutBtn(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        /*let button = null;

        if (isLoggedIn) {
            button = <LogoutBtn onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginBtn onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );*/

        /**
         * Inline If-Else with Conditional Operator 
         */
        return (
            <div>
                {isLoggedIn ? (
                    <LogoutBtn onClick={this.handleLogoutClick} />
                ) : (
                    <LoginBtn onClick={this.handleLoginClick} />
                )}
            </div>
        );
    }

}

/** 
 * Inline if with Logical && Operator
 */

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;

    return (
    <div>
        <h1>Hello!</h1>
        {unreadMessages.length > 0 &&
            <h2>
                You have {unreadMessages.length} unread messages.
            </h2>
        }
    </div>
    );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
/*ReactDOM.render(
    <Mailbox unreadMessages={messages} />,
    document.getElementById('root')
);*/


/**
 * Preventing Component from Rendering 
 *  by returning null
 */
 function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Warning!
        </div>
    );
 }

 class ul extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(preState => ({
            showWarning: !preState.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning}></WarningBanner>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
 }

 /**
  * Lists and Keys
  **/
const numbers = [1,2,3,4,5];
// const doubled = numbers.map((number) => number * 2);
// console.log(doubled);

// const listItems = numbers.map((number) => 
//     <li>{number}</li>
// );


function NumberList(props) {
    const numbers = props.numbers;


    // const listItems = numbers.map((number) =>
    //     <li key={number.toString()}>{number}</li>
    // );

    // console.log(listItems);

    // return (
    //     <ul>{listItems}</ul>
    // );

    /* Embedding map() in JSX */
    return (
        <ul>
            {numbers.map((number) => 
                <li key={number.toString()}>{number}</li>
            )}
        </ul>
    );
}

function Blog(props) {
    const sidebar = (
        <ul>{props.posts.map((post) =>
                <li key={post.id}>{post.title}</li>
            )}
        </ul>
    );

    const content = props.posts.map((post) => 
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );

    return (
        <div>
            {sidebar}
            <hr/>
            {content}
        </div>
    );
}

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}    
];


function App() {
    return (
        <NumberList numbers={numbers}></NumberList>
    );
}

ReactDOM.render(
    <App />, 
    document.getElementById("root")
);
