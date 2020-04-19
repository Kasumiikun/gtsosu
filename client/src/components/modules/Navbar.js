import React, { Component } from "react";
import { Link, Router } from "@reach/router";

import { Layout, Menu } from "antd";
import LoginButton from "./LoginButton";
import "./Navbar.css";
const { Header } = Layout;

class RootNavbar extends Component {
  render() {
    return (
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" selectable={false}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/staff">Staff</Link>
          </Menu.Item>
          <Menu.Item key="3">Merch</Menu.Item>
          <Menu.Item key="4">
            <LoginButton user={this.props.user} />
          </Menu.Item>
          {this.props.user.username && (
            <Menu.Item className="Navbar-avatar" key="5">
              <img src={this.props.user.avatar}></img>
            </Menu.Item>
          )}
        </Menu>
      </Header>
    );
  }
}

class TourneyNavbar extends Component {
  render() {
    return (
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" selectable={false}>
          <Menu.Item key="1">
            <Link to={`/${this.props.tourney}/home`}>Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to={`/${this.props.tourney}/rules`}>Rules</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to={`/${this.props.tourney}/pools`}>Mappools</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to={`/${this.props.tourney}/players`}>Players</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to={`/${this.props.tourney}/schedule`}>Schedule</Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to={`/${this.props.tourney}/staff`}>Staff</Link>
          </Menu.Item>
          <Menu.Item key="7">
            <LoginButton user={this.props.user} />
          </Menu.Item>
          {this.props.user.username && (
            <Menu.Item className="Navbar-avatar" key="5">
              <img src={this.props.user.avatar}></img>
            </Menu.Item>
          )}
        </Menu>
      </Header>
    );
  }
}

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <RootNavbar user={this.props.user} path="/" />
        <RootNavbar user={this.props.user} path="/staff" />
        <TourneyNavbar user={this.props.user} path="/:tourney/*" />
      </Router>
    );
  }
}

export default Navbar;
