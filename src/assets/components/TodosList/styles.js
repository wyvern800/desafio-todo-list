import styled, { css } from 'styled-components';
import { shade } from 'polished';

// Wrapper principal
export const Wrapper = styled.div`
  // 'Logo' do site
  header {
    display: flex;
    justify-content: center;
    font-size: 50px;
    margin-bottom: 8px;
    font-family: 'Bebas Neue', cursive;
    color: lightgray;
    transition: color 0.2s;
    display: flex;

    align-items: center;

    span.stronger,
    .stronger2 {
      display: flex;
      justify-content: center;
      font-size: 50px;
      font-family: 'Bebas Neue', cursive;
      color: lightgray;
      transition: color 0.2s;
      display: flex;
      align-items: center;
      color: ${shade(0.2, 'lightgray')};
    }

    span.stronger2 {
      margin-left: 10px;
      color: ${shade(0.2, 'lightgray')};
    }
    // Texto pequeno
    small {
      color: gray;
      font-size: 15px;
      display: flex;
      margin: 0;
      padding: 0;
      margin: -24px;
      padding-left: 50px;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }
  }
`;

// Formulário de adição / edição do teclado
export const Form = styled.form`
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }

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

      min-width: 75%;

      // Aplica borda caso haja erros
      ${(props) =>
        props.hasError &&
        css`
          border: 2px solid #c53030;
          border-right: 0;
        `}

      // Aplica estilo caso este componente seja o foco
      &&:focus {
        border: 2px solid black;
      }

      // Aplica estilo ao placeholder do input
      &::placeholder {
        color: #a8a8b3;
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
      min-width: 25%;
      outline: none;

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
  .btn-edit,
  .btn-mark {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    transition: all 0.3s linear;
    width: 25px;
    padding: 1px;
    margin: 1px;
    //border: solid 1px red;
  }

  // Botão de editar
  .btn-edit {
    color: gray;

    // Aplicar hover ao botão
    &:hover {
      color: ${shade(0.2, 'gray')};
    }
  }

  // Botão de marcar
  .btn-mark {
    color: hsl(125, 71%, 66%);

    // Aplicar hover ao botão
    &:hover {
      color: ${shade(0.2, 'hsl(125, 67%, 44%)')};
    }
  }

  // Botão de remover
  .btn-remove {
    color: gray;

    // Aplicar hover ao botão
    &:hover {
      color: ${shade(0.2, 'gray')};
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

  //border: 1px solid orangge;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  align-items: baseline;

  // Component vazio (listas)
  .empty {
    color: hsla(243, 3%, 75%, 0.2);
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 17px;
    //border: 1px solid black;
  }

  // Header das listas
  h1 {
    color: gray;
    font-size: 20px;
    padding: 10px 0;
    width: 100%;
    display: flex;
    justify-content: center;

    border-bottom: 2px dotted lightgray;
    border-spacing: 30px;

    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;

    //border: 1px solid black;
  }
`;

// Componente inteiro
export const Todo = styled.div`
  border: 1px dotted ${shade(0.3, 'lightgray')};
  box-shadow: 0 3px 6px rgb(0 0 0 / 10%);

  // Muda o tamanho para tela Surface Duo
  @media screen and (max-width: 720px) {
    width: 100%;
    max-width: 450px;
  }

  .completed-todo {
    div {
      border: 1px solid black;
    }
  }

  // Aplica estilo caso ele esteja completo
  ${(props) =>
    props.isCompleted &&
    css`
      text-decoration: line-through;
      color: ${shade(0.2, 'lightgray')};
      border: 1px dotted lightgray;
      box-shadow: none;
    `}

  border-radius: 3px;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: hsl(210, 36%, 96%);
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
    max-width: 74%;

    @media screen and (max-width: 600px) {
      max-width: 29%;
      width: 100%;
    }

    @media screen and (max-width: 720px) {
      max-width: 60%;
      width: 100%;
    }

    @media screen and (max-width: 730px) {
      max-width: 61%;
      width: 100%;
    }

    border-radius: 3px;
    display: block;
    padding: 8px;
    margin: 0;
    cursor: pointer;
    width: 100%;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 11px;

    //border: 1px solid green;

    //max-height: 15px;
  }

  div.todo-description2 {
    max-width: 100%;
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

  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;

// Container de todos incompletos
export const Todos = styled.div`
  //border: 1px solid blue;

  @media screen and (max-width: 600px) {
    width: 100%;
    margin-bottom: 3px;
  }

  // Muda o tamanho para tela Surface Duo
  @media only screen and (max-width: 720px) {
    width: 100%;
    max-width: 580px;
  }

  display: flex;
  //border: 1px solid blue;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  max-width: 328px;
  margin: 3px;
`;

// Container de todos completos
export const Completed = styled.div`
  //border: 1px solid blue;

  @media screen and (max-width: 600px) {
    width: 100%;
  }

  // Muda o tamanho para tela Surface Duo
  @media only screen and (max-width: 720px) {
    width: 100%;
    max-width: 580px;
  }

  display: flex;
  //border: 1px solid blue;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  max-width: 328px;
  margin: 3px;
`;

// Divzinha de erros
export const Errors = styled.div`
  color: ${(props) => (props.color ? props.color : 'white')};
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  border: 1px dashed ${(props) => props.color};

  // Aplica hover ao passar o mouse em cima
  &:hover {
    border-color: ${(props) => shade(0.1, props.color)};
    color: ${(props) => shade(0.1, props.color)};
  }

  // Texto dentro
  span {
    font-family: 'Roboto', sans-serif;
  }

  // Aplica estilos a telas menores
  @media screen and (max-width: 600px) {
    span {
      font-size: 11px;
      color: red;
      padding: 5px;
    }
  }
`;

export const TodoInfos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;

  div.bread-crumb {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    p {
      font-size: 20px;
      border: 1px solid blue;
      width: 100%;
      font-family: 'Roboto', sans-serif;
      border: 0;
      border-radius: 5px 0 0 5px;
      color: #3a3a3a;
      border-right: 0;
      background-color: rgb(238, 238, 238);
      font-family: 'Roboto', sans-serif;
      padding-left: 15px;
      margin-bottom: 15px;
      white-space: nowrap;
      overflow: hidden;
      max-width: 100%;
      word-break: normal;
      text-transform: capitalize;
    }

    button {
      margin-top: 25px;
      background: #ffa82e;
      border-radius: 5px;
      border: 0;
      color: #fff;
      font-weight: bold;
      transition: background-color 0.2s;
      min-width: 15%;
      outline: none;

      // Aplicar estilo ao dar hover
      &:hover {
        background: ${shade(0.2, '#ffa82e')};
      }
    }
  }
`;

export const ModalButton = styled.button`
  margin-top: 25px;
      background: gray;
      border-radius: 5px;
      border: 0;
      color: #fff;
      font-weight: bold;
      transition: background-color 0.2s;
      min-width: 15%;
      outline: none;

      // Aplicar estilo ao dar hover
      &:hover {
        background: ${shade(0.2, 'gray')};
      }
    }
`;
