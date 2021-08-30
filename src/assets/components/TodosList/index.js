import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';
import { css } from 'styled-components';
import { Link } from 'react-router-dom';

import {
  Wrapper,
  Todos,
  Completed,
  ListsWrapper,
  Controls,
  Clear,
  Errors,
  Form,
  Todo,
} from './styles';

/**
 * Work flow
- Botão de remover com ícone - DONE
- Mini checkbox ao lado de cada uma - DONE
- Clicar na checkbox faz com que ela a todo fique apagada e vá para um menu de completed para direita - DONE
- Menu na direita poderá ser limpo com botão de limpar - DONE
- Todo removível - DONE
- Todo editável
- Arrumar painel de 'erros' - DONE
- Confirmações para Exclusao
- Visualizar todos completos - PARTIALLY DONE
- Layout responsivo em todos os dispotitivos - DONE
 */

function TodosList() {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState('');
  const [completedTodos, setCompletedTodos] = useState([]);
  const [editing, setEditing] = useState(false);
  const [edited, setEdited] = useState('');
  const [todoOpened, setTodoOpened] = useState({ opened: false });

  /**
   * Limpa a lista
   */
  const clear = () => {
    setCompletedTodos([]);
  };

  /**
   * Cuida da parte de editar
   * @param {number} index
   */
  const toggleTodoEdition = (index) => {
    console.log(index);

    setEdited(index);

    setEditing(true);

    // Encontrar o todo com o mesmo id
    const todo = todos.find((p, i) => index === i);

    console.log('toggleTodoEdition: ' + index);

    setValue(todo.description);
  };

  /**
   * Abrir informações do todo
   * @param {object} openedTodo
   */
  const openTodo = (openedTodo) => {
    console.log('openTodo ' + openedTodo.description);

    const theTodo = {
      todo: {
        description: openedTodo.description,
        isCompleted: openedTodo.isCompleted,
      },
      opened: true,
    };

    setTodoOpened(theTodo);

    console.log(theTodo);
  };

  /**
   * Processa o edit do todo
   * @param {number} index
   */
  const processEditTodo = (event) => {
    event.preventDefault();

    console.log('id: ', edited);

    let todosList = [...todos];

    const todo = todos.find((t, index) => index === edited);

    todosList.splice(edited, 1, todo);

    setTodos(todosList);

    setEditing(false);

    setValue('');
  };

  /**
   * Remove o todo clicado
   * @param {number} index
   */
  const removeTodo = (index, e) => {
    const newTodos = [...todos];

    const todo = newTodos.find((t, i) => index === i);

    var indexTodo = newTodos.indexOf(todo);

    if (index > -1) {
      newTodos.splice(indexTodo, 1);
    }

    setTodos(newTodos);

    setEditing(false);

    // Limpar o value caso ele tenha sido preenchido
    if (value !== '') {
      setValue('');
    }
  };

  /**
   * Adiciona o todo para o array de todos
   * @param {event} event
   */
  const handleAddTodo = (event) => {
    // Previnir que a página recarrega e resete os estados
    event.preventDefault();

    if (value === '') {
      setError('Digite algo antes de adicionar!');
      return;
    }

    const newTodosList = [
      ...todos,
      {
        description: value,
        isCompleted: false,
      },
    ];

    setTodos(newTodosList);

    setError('');

    // Limpa o input
    setValue('');
  };

  /**
   * Cuida da parte de marcar/desmarcar o checkbox dos todos
   * @param {number} index O index que estamos marcando na checkbox
   * @param {boolean} chkValue O valor atual do checkbox
   */
  const handleCompletion = (index, chkValue) => {
    let updatedTodos = [...todos];
    let updatedCompletedTodos = [...completedTodos];

    console.log('handleCommpletion(index' + index);

    const todoCopy = updatedTodos.find((t, i) => index === i);

    console.log(todoCopy.description);

    updatedCompletedTodos.push(todoCopy);

    setCompletedTodos(updatedCompletedTodos);

    updatedTodos.splice(index, 1);

    setTodos(updatedTodos);
    // updatedTodos[idx].isCompleted = chkValue.target.checked;
    // setTodos(updatedTodos);
    // setCompletedTodos(updatedTodos);
    // updatedCompletedTodos[idx].isCompleted = chkValue.target.checked;
    // console.log(chkValue.target.checked);
  };

  return (
    <>
      <Wrapper>
        <div>
          <header>
            Todo List
          </header>
        </div>
        {/** Se a todo estiver aberta, mostar infos sobre ela e um botão de voltar */}
        {todoOpened.opened ? (
          <>
            {todoOpened.todo !== undefined && (
              <>
                <a onClick={() => setTodoOpened({})}>Voltar</a>
                {todoOpened.todo.description}
              </>
            )}
          </>
        ) : (
          <>
            {editing ? (
              <>
                {/** Seção de edição */}
                <Form
                  hasError={!!error}
                  isEditing={!!editing}
                  onSubmit={processEditTodo}
                >
                  {error && (
                    <Errors color={'red'}>
                      <span>{error}</span>
                    </Errors>
                  )}
                  <div>
                    <input
                      className="todo-description"
                      type="text"
                      value={value}
                      onChange={(event) => setValue(event.target.value)}
                    />
                    <button type="submit">Editar</button>
                  </div>
                </Form>
              </>
            ) : (
              <Form hasError={!!error} onSubmit={handleAddTodo}>
                {error && (
                  <Errors color={'red'}>
                    <span>{error}</span>
                  </Errors>
                )}
                <div>
                  <input
                    className="todo-description"
                    type="text"
                    value={value}
                    placeholder="O que você precisa fazer hoje?"
                    onChange={(event) => setValue(event.target.value)}
                  />
                  <button type="submit">Adicionar</button>
                </div>
              </Form>
            )}
            <ListsWrapper>
              <Todos>
                <h1>Tasks Incompletas</h1>
                {todos.length >= 1 ? (
                  <>
                    {todos.map((todo, index) => {
                      return (
                        <Todo key={index}>
                          <div
                            className="todo-description"
                            onClick={() => handleCompletion(index)}
                          >
                            <span>{todo.description}</span>
                          </div>

                          <Controls>
                            <button
                              className="btn-edit"
                              onClick={() => toggleTodoEdition(index)}
                            >
                              <FaEdit />
                            </button>
                            <button
                              className="btn-remove"
                              onClick={() => removeTodo(index)}
                            >
                              <FaTrash />
                            </button>
                          </Controls>
                        </Todo>
                      );
                    })}
                  </>
                ) : (
                  <span className="empty">Vazio</span>
                )}
              </Todos>
              <Completed>
                <h1>Tasks Completas</h1>
                {completedTodos.length >= 1 ? (
                  <>
                    {completedTodos.map((todo, index) => {
                      return (
                        <Todo key={index}>
                          <div
                            className="todo-description"
                            onClick={() => openTodo(todo)}
                          >
                            <span>{todo.description}</span>
                          </div>
                        </Todo>
                      );
                    })}
                  </>
                ) : (
                  <span className="empty">Vazio</span>
                )}
                <div>
                  {completedTodos.length > 0 && (
                    <Clear onClick={() => clear()}>Limpar</Clear>
                  )}
                </div>
              </Completed>
            </ListsWrapper>
          </>
        )}
      </Wrapper>
    </>
  );
}
export default TodosList;
