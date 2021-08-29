import styled, { css } from 'styled-components';
import { shade } from 'polished';

// Wrapper principal
export const Wrapper = styled.div`
  // Aplicar estilo em telas menores
  @media screen and (max-width: 600px) {
    margin: 2rem auto 0;
  }

  //border: 1px solid red;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  width: 90vw;
  max-width: 50rem;
  margin: 7rem auto 0;

  // 'Logo' do site
  header {
    display: flex;
    justify-content: center;
    font-size: 50px;
    margin-bottom: 10px;
    font-family: 'Bebas Neue', cursive;
    color: lightgray;
    transition: color 0.2s;

    // Texto pequeno
    small {
      position: absolute;
      color: gray;
      font-size: 15px;
    }

    // Aplicar hover ao logo
    &:hover {
      color: ${shade(0.2, 'gray')};
    }
  }
`;

// Formulário de adição / edição do teclado
export const Form = styled.form`
  div {
    display: flex;
    margin-bottom: 10px;

    // Input de digitação
    input {
      flex: 1;
      height: 50px;
      padding: 0 24px;
      border: 0;
      border-radius: 5px 0 0 5px;
      color: #3a3a3a;
      border-right: 0;
      background-color: rgb(238, 238, 238);
      font-family: 'Roboto', sans-serif;

      // Aplica borda caso haja erros
      ${(props) =>
        props.hasError &&
        css`
          border 2px solid #c53030;
          border-right: 0;
      `}

      // Aplica estilo caso este componente seja o foco
      &&:focus {
        border: 2px solid black;
      }

      // Aplica estilo ao placeholder do input
      &::placeholder {
        color: #a8a8b3;
        text-align: center;
      }
    }

    // Botão de Adição
    button {
      width: 210px;
      height: 50px;
      background: #04d361;
      border-radius: 0px 5px 5px 0px;
      border: 0;
      color: #fff;
      font-weight: bold;
      transition: background-color 0.2s;

      // Aplicar estilo ao dar hover
      &:hover {
        background: ${shade(0.2, '#04d361')};
      }

      // Aplica estilo ao botão caso estivermos em estado de edição
      ${(props) =>
        props.isEditing &&
        css`
          background: #47bcff;

          // Aplica estilo ao passar o mouse por cima
          &:hover {
            background: ${shade(0.2, '#00a1ff')};
          }
        `}
    }
  }
`;

// Div de controles
export const Controls = styled.div`
  // Propriedades compartilhadas entre os dois botões
  button.btn-remove,
  .btn-edit {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    transition: all 0.3s linear;
    width: 25px;
    padding: 5px;
    margin: 0, 2px, 0, 2px;

    border: solid 1px red;
  }

  // Botão de editar
  .btn-edit {
    color: hsl(125, 71%, 66%);

    // Aplicar hover ao botão
    &:hover {
      color: ${shade(0.2, 'hsl(125, 67%, 44%)')};
    }
  }

  // Botão de remover
  .btn-remove {
    color: hsl(360, 71%, 66%);

    // Aplicar hover ao botão
    &:hover {
      color: ${shade(0.2, 'hsl(360, 71%, 66%)')};
    }
  }
`;

// Wrapper das listas
export const ListsWrapper = styled.div`
  // Aplicar estilo em telas menores
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }

  //border: 1px solid orange;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  align-items: baseline;

  .empty {
    color: hsla(243, 3%, 75%, 0.3);
    display: flex;
    justify-content: center;
  }

  h1 {
    color: gray;
    font-size: 25px;
    padding: 10px 0;
  }
`;

// Componente inteiro
export const Todo = styled.div`
  border: 1px dotted lightgray;

  border-radius: 3px;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: hsl(210, 36%, 96%);
  box-shadow: 0 3px 6px rgb(0 0 0 / 8%);

  width: 100%;
  max-width: 325px;
  max-height: 42px;

  //border: 1px solid blue;
  // Retira outline dos botões
  button {
    outline: none;
  }

  // Área clicável para a interação
  div.todo-description {
    border: 1px solid green;
    border-radius: 3px;
    display: block;
    padding: 8px;
    margin: 0;
    cursor: pointer;
    width: 100%;
    max-width: 72%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  // Para aplicar margem somente nos componentes depois do primeiro
  &:not(:first-child) {
    margin-top: 6px;
  }

  // Aplicar hover
  &:hover {
    transform: translateX(6px);
    transition: background-color 0.3s ease-in-out;
    transition: transform 0.1s;
    background-color: ${shade(0.1, 'hsl(210, 36%, 96%)')};
  }

  // Aplicar ao tirar o mouse de cima
  &:not(:hover) {
    transition: background-color 0.3s ease-in-out;
    transition: transform 0.1s;
  }

  // Descrição do todo
  span {
    padding: 10px;
    margin-bottom: 0;

    font-family: 'Roboto', sans-serif;
    text-transform: capitalize;
  }

  // Checkbox
  input {
    margin-right: 6px;
  }
`;

// Botão de limpar
export const Clear = styled.div`
  cursor: pointer;
  margin-top: 10px;
`;

// Container de todos incompletos
export const Todos = styled.div`
  @media screen and (max-width: 600px) {
    width: 100%;
  }

  display: flex;
  //border: 1px solid blue;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  margin: 8px;
`;

// Container de todos completos
export const Completed = styled.div`
  @media screen and (max-width: 600px) {
    width: 100%;
  }
  display: flex;
  //border: 1px solid blue;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;

// Divzinha de erros
export const Errors = styled.div`
  margin-bottom: 1rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-size: 0.9rem;
  text-transform: capitalize;
  border: 1px dashed gray;
  padding: 12px;
  font-family: 'Roboto', sans-serif;
  background-color: ${(props) => (props.bgColor ? props.bgColor : 'white')};
`;
