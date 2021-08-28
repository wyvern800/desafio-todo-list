import React, { Component } from 'react';

export default class Title extends Component {

  componentDidMount() {
    const defaultTitle = "";

    const { name } = this.props;

    document.title = `${name}`;
  }
  render() {
    return(<></>);
  }
}
