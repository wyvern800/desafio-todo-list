import React, { Component } from 'react';

export default class Title extends Component {

  componentDidMount() {
    const defaultTitle = "Base App React by wyvern800";

    const { name } = this.props;

    document.title = `${defaultTitle} - ${name}`;
  }
  render() {
    return(<></>);
  }
}
