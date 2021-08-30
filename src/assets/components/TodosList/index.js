import React, { useState, useEffect, useRef } from 'react';
import { FaEdit, FaTrash, FaRegEye, FaCheck } from 'react-icons/fa';
import { Modal } from 'react-bootstrap';
import { parseISO, isAfter, format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

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
- Confirmações para Exclusao - DONE
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
  const [todoOpened, setTodoOpened] = useState({ opened: false });
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
        completedAt: openedTodo.completedAt,
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
      completedAt: {},
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

    const todo = newTodos.find((t, i) => t === index);

    var indexTodo = newTodos.indexOf(todo);

    console.log('removeTodo(index='+indexTodo+", desc="+todo.description+")")

    if (indexTodo > -1) {
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
      setError('Digite a tarefa antes de adicinar.');
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

    todoCopy.completedAt = new Date().getTime();

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

  /**
   * Retorna uma data formatada pra disposição depois
   * @param {Date} date
   */
  const getFormattedDate = (date) => {
    const formattedDate = format(date, " dd 'de' MMMM', às ' HH:mm'h'", {
      locale: pt,
    });
    return formattedDate;
  };

  return (
    <>
      {modalOpened && (
        <Modal
          show={modalOpened}
          centered
          onHide={() => removeTodo(selectedTodo)}
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter"> {/**id="contained-modal-title-vcenter" */}
            Excluir tarefa?
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            A tarefa <b>{selectedTodo.description}</b> será excluida, você tem certeza?
          </Modal.Body>
          <Modal.Footer>
            <button
              onClick={() => {
                removeTodo(selectedTodo)
                setModalOpened(false)
              }} /*onClick={hideModal}*/
            >
              Sim
            </button>
            <button onClick={()=> setModalOpened(false)}>Cancelar</button>
          </Modal.Footer>
        </Modal>
      )}

      <Wrapper>
        <div>
          <header>
            <span className="stronger">T</span>o
            <span className="stronger">D</span>o
            <span className="stronger2">L</span>ist
          </header>
        </div>
        {/** Se a todo estiver aberta, mostar infos sobre ela e um botão de voltar */}
        {todoOpened.opened ? (
          <>
            {todoOpened.todo !== undefined && (
              <>
                <TodoInfos>
                  <div className="bread-crumb">
                    Descrição:
                    <p>{todoOpened.todo.description}</p>
                    Status:
                    <p>
                      {todoOpened.todo.isCompleted ? (
                        <>
                          Concluído em
                          {getFormattedDate(todoOpened.todo.completedAt)}
                        </>
                      ) : (
                        'Incompleta'
                      )}
                    </p>
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
                      maxLength="70"
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
                    placeholder="O que você precisa fazer?"
                    maxLength="70"
                    onChange={(event) => setValue(event.target.value)}
                  />
                  <button type="submit">Adicionar</button>
                </div>
              </Form>
            )}
            <ListsWrapper>
              <Todos>
                <h1>Tarefas Incompletas</h1>
                {todos.length >= 1 ? (
                  <>
                    {todos.map((todo, index) => {
                      return (
                        <Todo key={index} isCompleted={todo.isCompleted}>
                          <div
                            className="todo-description"
                            onClick={() => openTodo(todo)} //handleCompletion(index)
                          >
                            <span>{todo.description}</span>
                          </div>

                          <Controls>
                            <button
                              className="btn-edit"
                              onClick={() => {
                                toggleTodoEdition(index);
                              }}
                            >
                              <FaEdit />
                            </button>
                            <button
                              className="btn-remove"
                              onClick={
                                () => openModal(index) /*removeTodo(index) */
                              }
                            >
                              <FaTrash />
                            </button>
                            <button
                              className="btn-mark"
                              onClick={() => handleCompletion(index)}
                            >
                              <FaCheck />
                            </button>
                          </Controls>
                        </Todo>
                      );
                    })}
                  </>
                ) : (
                  <span className="empty">Sem tarefas</span>
                )}
              </Todos>
              <Completed>
                <h1>Tarefas Completas</h1>
                {completedTodos.length >= 1 ? (
                  <>
                    {completedTodos.map((todo, index) => {
                      return (
                        <Todo
                          className="completed-todo"
                          key={index}
                          isCompleted={todo.isCompleted}
                        >
                          <div
                            className="todo-description todo-description2"
                            onClick={() => openTodo(todo)}
                          >
                            <span>{todo.description}</span>
                          </div>
                        </Todo>
                      );
                    })}
                  </>
                ) : (
                  <span className="empty">Sem tarefas</span>
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
