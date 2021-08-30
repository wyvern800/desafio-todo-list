import React, { Component } from 'react';
import { Container } from './styles';
import { FaHeart } from 'react-icons/fa';

export default class Footer extends Component {
  render() {
    return (
      <Container>
        <div className="credits">
          <div>
            Feito com
            <span>
              <FaHeart size={10} />
            </span>
            por Matheus Guilherme Ferreira
            <span className="author">(wyvern800)</span>
          </div>
          <a href="https://github.com/wyvern800/desafio-todo-list">Ver código-fonte</a>
        </div>
      </Container>
    );
  }
}
