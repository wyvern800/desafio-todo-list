import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';

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
 */

function TodosList() {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([
    {
      description: 'Cortar umas lenhas',
      isCompleted: false,
    },
  ]);

  const [error, setError] = useState('');

  const [completedTodos, setCompletedTodos] = useState([
    {
      description: 'Dar banho no dog',
      isCompleted: true,
    },
  ]);

  const [editing, setEditing] = useState(false);
  const [edited, setEdited] = useState('');

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
  const removeTodo = (e, index) => {
    const newTodos = [...todos];

    newTodos.splice(index, 1);

    setTodos(newTodos);

    setEditing(false);

    // Limpar o value caso ele tenha sido preenchido
    if (value !== "") {
      setValue("");
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
      setError('Campo em branco, digite algo antes de adicionar');
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
            Todo List<small>simple</small>
          </header>
        </div>
        {/** Seção de edição */}
        {editing ? (
          <>
            <Form
              hasError={!!error}
              isEditing={!!editing}
              onSubmit={processEditTodo}
            >
              {error && <Errors>{error}</Errors>}
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
            {error && <Errors>{error}</Errors>}
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
                      <span>{todo.description}</span>
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
      </Wrapper>
    </>
  );
}
export default TodosList;
