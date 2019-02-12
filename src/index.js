import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { User } from "./components/user";
import { Switch } from 'react-router'

/* Without component */
const Index = () => {
  return <div>Hello React!</div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));


/* With component */
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      homeLink: "Home"
    };
  }
  onGreet() {
    alert("Child to Parent Component Data Pass");
  }

  onChangeLinkName(newName) {
    this.setState({
      homeLink: newName
    });
  }
  render() {
    var user = {
      name: 'Anna',
      hobbies: ['sports', 'reading']
    }
    return (
      <Router>
        <Switch>
          <Route path={"/user"} Component={User} />
          <Route path={"/home"} Component={Home} />
        </Switch>
      </Router>
      // <div className="container">
      //   <div className="row">
      //     <div className="col-md-10 col-xs-offset-1">
      //     {/* Heder is  a stateless component */}
      //         <Header homeLink={this.state.homeLink}/> 
      //     </div>
      //   </div>
      //   <div className="row">
      //     <div className="col-md-10 col-xs-offset-1">
      //         <Home 
      //         name={"Sai Teja"} 
      //         age={27} 
      //         user={user} 
      //         greet={this.onGreet}
      //         initialHomeLink = {this.state.homeLink}
      //         changeLink = {this.onChangeLinkName.bind(this)}>
      //             <p>It is children in home</p>
      //         </Home>
      //     </div>
      //   </div>
        
      // </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));