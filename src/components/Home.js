import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {
    // If we want to change values and show in ui , we have to use this.state and this.setState
    // this.state ----> it is a property given by React.Component
    // this.setState ----> it is also a property given by React.Component which takes a object which have only the changed values
    constructor(props) {
        super();
        // this.age = props.age;
        this.state = {
            age: props.age,
            status: 0, //we will not change status,
            homeLink: props.initialHomeLink
        }
    }

    onMakeOlder() {
        // this.age += 3;
        // console.log(this.age, '----------')
        this.setState({
            age: this.state.age + 3
        });
    }

    onChangeLink() {
        this.props.changeLink(this.state.homeLink) 
    }
    onChangeLinkWithInput() {
        this.props.changeLink(this.state.homeLink) 
    }
    onChangeInput(eve) {
        this.setState({
            homeLink: eve.target.value
        })
    }
    render() {
        let content = '';
        if (true) {
            content = <p>Hello!</p>;
        }
        var hobbiesList = this.props.user.hobbies.map((hobby, i) => {
            return <li key={i}>{hobby}</li>;
        })

        return (
            <div>
                <p>In Home Component</p>
                {2 + 2}
                {content}
                <p>Name is : {this.props.name}, age is : {this.props.age}</p>
                <p>User Name is : {this.props.user.name}</p>
                <div>
                    <p>Hobbies are:</p>
                    <ul>
                        {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                    </ul>
                    <ul>{hobbiesList}</ul>
                </div>

                {this.props.children}

                <div>
                    <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make Me Older!</button>
                    {/* or */}
                    <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make Me Older!</button>
                    <p>Increased Age is: {this.state.age} </p> {/* It will change */}
                    <p>Status: {this.state.status}</p> {/* It will not change */}
                    <hr/>
                    <button onClick={this.props.greet} className="btn btn-primary">Child to Parent</button>
                    <hr/>
                    <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Child to Parent Passing Data(changing link name Home - Changed Link)</button>
                    <hr/>
                    <input type="text" value = {this.state.homeLink} onChange={(event) => this.onChangeInput(event)}/>
                    <button onClick={this.onChangeLinkWithInput.bind(this)} className="btn btn-primary">Change Header Link</button>
                </div>
            </div>

        );
    }
}
// Type checking for props
Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object,
    children: PropTypes.element.isRequired,
    greet: PropTypes.func,
    initialHomeLink: PropTypes.string
}
