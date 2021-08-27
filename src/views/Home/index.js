import React, { Component, useState } from 'react';

import { Container } from './styles';

import Title from '../../assets/components/Title';
import TodosList from '../../assets/components/TodosList';

import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <>
        <Title name="Home" />
        <TodosList/>
      </>
    );
  }
}
