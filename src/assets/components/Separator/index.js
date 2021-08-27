import React, { Component } from 'react';

import { SeparatorDiv } from './styles';

export default class Separator extends Component {
  render() {
    const { height } = this.props;

    return (
      <SeparatorDiv>
        <div style={{ height: height + 'px' }} />
      </SeparatorDiv>
    );
  }
}
