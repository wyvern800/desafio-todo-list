import React, {useState} from 'react';

import { Container, Todos, Completed, ListsWrapper } from './styles';

/**
 * Work flow
- Menu pequeno ao clicar em cada todo
- Mini checkbox ao lado de cada uma - DONE
- Clicar na checkbox faz com que ela a todo fique apagada e vá para um menu de completed para direita - DONE
- Menu na direita poderá ser limpo com botão de limpar
 */

function TodosList() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    {
    description: "Veja só que todolist mais linda",
    isCompleted: false
    }
  ]);

  const [completedTodos, setCompletedTodos] = useState([]);

  /**
   * Cuida da parte de marcar/desmarcar o checkbox dos todos
   * @param {number} idx O index que estamos marcando na checkbox
   * @param {boolean} chkValue O valor atual do checkbox
   */
  const handleCompletion = (idx, chkValue) => {
    const updatedTodos = [...todos];
    const updatedCompletedTodos = [...completedTodos];

    // Setar como completo antes de mandar pro array de completos
    updatedTodos[idx].isCompleted = chkValue.target.checked;
    // Copiar o todo checado para o array de completados
    const completedTodo = todos[idx];
    // Por o todo na lista de completos
    updatedCompletedTodos.push(completedTodo);
    // Setar o estado de completos
    setCompletedTodos(updatedCompletedTodos);
    // Remover o todo da lista de todos
    updatedTodos.splice(idx, 1);
    // Atualizar a lista antiga de todos
    setTodos(updatedTodos);

    // updatedTodos[idx].isCompleted = chkValue.target.checked;
    // setTodos(updatedTodos);
    // setCompletedTodos(updatedTodos);
    // updatedCompletedTodos[idx].isCompleted = chkValue.target.checked;
    // console.log(chkValue.target.checked);
  }

  return (
      <>
        <Container>

        <form
        onSubmit={event => {
          // Previnir que a página recarrega e resete os estados
          event.preventDefault();

          // Limpa o input
          setValue('');

          // Cria mais um todo no estado
          setTodos([...todos, {
            description: value,
            isCompleted: false
          }]);
        }}>
          <div>
        <input
          className="todo-description"
          type="text"
          value={value}
          placeholder="O que você precisa fazer hoje"
          onChange={event => setValue(event.target.value)}
        />
        <button type="submit">Adicionar</button>
        </div>
        </form>
        <ListsWrapper>
        <Todos>
        <h1>TODO</h1>
        <ul>
          {todos.map((todo, idx) => (
            <li key={idx}>
              <input type="checkbox" checked={todo.isCompleted} onChange={(event)=> {handleCompletion(idx, event)}}/>
              <a href="#">{todo.description}</a>
              <button>Remover</button>
            </li>
          ))}
        </ul>
        </Todos>
        <Completed>
           <h1>Completed</h1>
           <ul>
          {completedTodos.map((todo, idx) => (
            <li key={idx}>
              <input type="checkbox" checked={todo.isCompleted} disabled={true}/>
              <a href="#">{todo.description}</a>
            </li>
          ))}
        </ul>
        </Completed>
        </ListsWrapper>
        </Container>
      </>
    );
}
export default TodosList;
