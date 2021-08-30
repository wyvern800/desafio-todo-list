import React, { useState, useEffect, useRef } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Modal } from 'react-bootstrap';

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
  TodoInfos,
} from './styles';

/**
 * Work flow
- Botão de remover com ícone - DONE
- Mini checkbox ao lado de cada uma - DONE
- Clicar na checkbox faz com que ela a todo fique apagada e vá para um menu de completed para direita - DONE
- Menu na direita poderá ser limpo com botão de limpar - DONE
- Todo removível - DONE
- Todo editável - DONE
- Arrumar painel de 'erros' - DONE
- Confirmações para Exclusao
- Visualizar todos completos - DONE
- Layout responsivo em todos os dispotitivos - DONE
 */

function TodosList() {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState('');
  const [completedTodos, setCompletedTodos] = useState([]);
  const [editing, setEditing] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState({});
  const [todoOpened, setTodoOpened] = useState({ opened: false});
  const [modalOpened, setModalOpened] = useState(false);
  const input = useRef(null);

  // Pra ligar os consoles.log que eu precisei para testar antes
  const debugMode = false;

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
    if (debugMode) console.log(index);

    setSelectedTodo(index);

    setEditing(true);

    // Encontrar o todo com o mesmo id
    const todo = todos.find((p, i) => index === i);

    if (debugMode) console.log('toggleTodoEdition: ' + index);

    setValue(todo.description);
  };

  /**
   * Abrir informações do todo
   * @param {object} openedTodo
   */
  const openTodo = (openedTodo) => {
    if (debugMode) console.log('openTodo ' + openedTodo.description);

    const theTodo = {
      todo: {
        description: openedTodo.description,
        isCompleted: openedTodo.isCompleted,
      },
      opened: true,
    };

    setTodoOpened(theTodo);

    if (debugMode) console.log(theTodo);
  };

  /**
   * Processa o edit do todo
   * @param {number} index
   */
  const processEditTodo = (event) => {
    event.preventDefault();

    if (debugMode) console.log('id: ', selectedTodo);

    const newTodos = [...todos];

    const todo = newTodos.find((t, i) => selectedTodo === i);

    const newTod = {
      description: value,
      isCompleted: todo.isCompleted,
    };

    var indexTodo = newTodos.indexOf(todo);

    if (selectedTodo > -1) {
      newTodos.splice(indexTodo, 1, newTod);
    }

    setTodos(newTodos);

    setEditing(false);

    setValue('');
  };

  /**
   * Abra o modal de confirmação de deleção
   * @param {number} index
   */
  const openModal = (index) => {
    setModalOpened(true);

    const todo = todos.find((t, i) => index === i);

    setSelectedTodo(todo);
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

    if (debugMode) console.log('handleCommpletion(index' + index);

    const todoCopy = updatedTodos.find((t, i) => index === i);

    todoCopy.isCompleted = true;

    if (debugMode) console.log(todoCopy.description);

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
      {modalOpened && (
        <Modal
          show={modalOpened}
          centered
          onHide={() => removeTodo(selectedTodo)}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {selectedTodo.description}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Você tem certeza que desweja excluir: {selectedTodo.description}?
          </Modal.Body>
          <Modal.Footer>
            <button
              onClick={() => removeTodo(selectedTodo)} /*onClick={hideModal}*/
            >
              Yes
            </button>
            <button /*onClick={hideModal}*/>Cancel</button>
          </Modal.Footer>
        </Modal>
      )}

      <Wrapper>
        <div>
          <header>Todo List</header>
        </div>
        {/** Se a todo estiver aberta, mostar infos sobre ela e um botão de voltar */}
        {todoOpened.opened ? (
          <>
            {todoOpened.todo !== undefined && (
              <>
                <TodoInfos>
                  <div className="bread-crumb">
                    Descrição:
                    <span>{todoOpened.todo.description}</span>
                    Status:
                    <span>{todoOpened.todo.isCompleted ? 'Completo' : 'Incompleta'}</span>
                    <button onClick={() => setTodoOpened({})}>Voltar</button>
                  </div>
                </TodoInfos>
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
                  <div ref={input}>
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
                <div ref={input}>
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
                              onClick={() => {
                                toggleTodoEdition(index);
                                input.current.focus();
                              }}
                            >
                              <FaEdit />
                            </button>
                            <button
                              className="btn-remove"
                              onClick={
                                () => removeTodo(index) /*openModal(index) */
                              }
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
                        <Todo className="completed-todo" key={index}>
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
