import React, { Component } from "react";

import UserService from "../services/user.service";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: []
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        console.log(response.data)

        let list = [];
        for (let item of response.data.results) {
            list.push(<p key={item.id}>{item.client_name} {item.client_phone}</p>);
        }
        this.setState({content: list});
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{}
            {this.state.content}</h3>
        </header>
      </div>
    );
  }
}
