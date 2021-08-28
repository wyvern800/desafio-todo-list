import React, {useState} from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";

import { Container, Todos, Completed, ListsWrapper, Controls, Clear, Errors } from './styles';

/**
 * Work flow
- Botão de remover com ícone - DONE
- Mini checkbox ao lado de cada uma - DONE
- Clicar na checkbox faz com que ela a todo fique apagada e vá para um menu de completed para direita - DONE
- Menu na direita poderá ser limpo com botão de limpar - DONE
- Todo removível - DONE
- Todo editável
- Arrumar painel de 'erros'
 */

function TodosList() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([{
    description: "Cortar umas lenhas",
    isCompleted: false
  }]);

  const [error, setError] = useState("");

  const [completedTodos, setCompletedTodos] = useState([
    {
      description: "Dar banho no dog",
      isCompleted: true
    }
  ]);

  /**
   * Limpa a lista
   */
  const clear = () => {
    setError("Limpo com sucesso!")

    setCompletedTodos([]);
  }

  /**
   * Cuida da parte de editar
   * @param {number} index
   */
  const editTodo = (index) => {
    console.log(index);
  }

  /**
   * Remove o todo clicado
   * @param {number} index
   */
  const removeTodo = (index) => {

    const newTodos = [...todos];

    newTodos.splice(index, 1);

    setTodos(newTodos)

    setError("Deletado com sucesso!");
  }

  /**
   * Cuida da parte de marcar/desmarcar o checkbox dos todos
   * @param {number} index O index que estamos marcando na checkbox
   * @param {boolean} chkValue O valor atual do checkbox
   */
  const handleCompletion = (index, chkValue) => {
    const updatedTodos = [...todos];
    const updatedCompletedTodos = [...completedTodos];

    console.log('index '+ index);

    // updatedTodos[idx].isCompleted = chkValue.target.checked;
    // setTodos(updatedTodos);
    // setCompletedTodos(updatedTodos);
    // updatedCompletedTodos[idx].isCompleted = chkValue.target.checked;
    // console.log(chkValue.target.checked);
  }

  return (
      <>
        <Container>
        <header>Todo List</header>
        <form
        onSubmit={event => {
          // Previnir que a página recarrega e resete os estados
          event.preventDefault();

          if (value === '') {
            setError("Campo em branco, digite algo antes de adicionar");
            return;
          }

          const newTodosList = [...todos, {
            description: value,
            isCompleted: false
          }];

          setTodos(newTodosList);

          setError("Adicionado com sucesso");

          // Limpa o input
          setValue('');
        }}>
          <Errors bgColor={error.color}>
            {error}
          </Errors>
          <div>
        <input
          className="todo-description"
          type="text"
          value={value}
          placeholder="O que você precisa fazer hoje?"
          onChange={event => setValue(event.target.value)}
        />
        <button type="submit">Adicionar</button>
        </div>
        </form>
        <ListsWrapper>
        <Todos>
        <h1>Tasks Incompletas</h1>
        <ul>
         { todos.length >= 1 ? <>{todos.map((todo, index) => (
            <li key={index}>
              <label htmlFor="description">
              <input id="description" type="checkbox" checked={todo.isCompleted} onChange={(event)=> handleCompletion(index, event)}/>
              {todo.description}
              </label>
              <Controls>
              <button className="btn-edit" onClick={() => editTodo(index)}><FaEdit/></button>
              <button className="btn-remove" onClick={() => removeTodo(index)}><FaTrash/></button>
              </Controls>
            </li>
          ))}</> : <span className="empty">Vazio</span>}
        </ul>
        </Todos>
        <Completed>
           <h1>Tasks Completas</h1>
           <ul>
          { completedTodos.length >= 1 ? <>{ completedTodos.map((completedTodo, index) => (
            <li key={index}>
              <label htmlFor="description">
              <input id="description" type="checkbox" checked={completedTodo.isCompleted} disabled={true}/>
              {completedTodo.description}
              </label>
            </li>
          ))}</> : <span className="empty">Vazio</span>}
        </ul>
        <div>
          { completedTodos.length > 0 && <Clear onClick={()=> clear()}>Limpar</Clear> }
        </div>
        </Completed>
        </ListsWrapper>
        </Container>
      </>
    );
}
export default TodosList;
