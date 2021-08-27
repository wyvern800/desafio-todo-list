import React, { Component } from 'react';
import { DivLoader } from './styles';

export default class Loading extends Component {
  render() {
    return (
      <>
      <DivLoader>
      <div className="loader"></div>
      </DivLoader>
      </>
    );
  }
}
