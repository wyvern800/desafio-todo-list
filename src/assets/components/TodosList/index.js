import React, { Component } from 'react';

export default class TodosList extends Component {
  state = {
    todos: [
      {
        nome: 'farandinha',
      },
    ],
  };

  componentDidMount() {

  }

  addTodos() {

  }

  render() {
    const { todos } = this.state;

    return (
      <>
        <input type="text" placeholder="digite aqui" />
        <button>Add</button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.nome}>
              <a href="#">{todo.nome}</a>
              <button>Remover</button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
