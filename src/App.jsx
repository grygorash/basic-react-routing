import React, { Component } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

import Home from "./components/Home";
import Users from "./components/Users";
import Widgets from "./components/Widgets";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    return (
      <ListGroup>

        <ListGroupItem>
          <Link to="/">Home</Link>
        </ListGroupItem>
        <ListGroupItem>
          <Link to="/users">Users</Link>
        </ListGroupItem>
        <ListGroupItem>
          <Link to="/widgets">Widgets</Link>
        </ListGroupItem>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/widgets" component={Widgets} />
          <Redirect from='*' to='/' />
        </Switch>

      </ListGroup>
    );
  }
}

export default App;