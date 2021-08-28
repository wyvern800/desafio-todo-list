import styled from 'styled-components';

export const Container = styled.div`
padding: 20px;

border: 1px solid red;


    form {
      div {
        display: flex;

      input {
      display: flex;
      flex-grow: 2;

      &::placeholder {
        color: #b3b0b5;
        }
      }

      button {
        display: flex;
        color: purple;
        border:0;
       }
    }
  }

`;

export const ListsWrapper = styled.div`
  border: 1px solid orange;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;

  h1 {
    color: purple;
  }
`;

export const Todos = styled.div`
  display: flex;
  border: 1px solid blue;
  flex-direction: column;
  align-items: center;
`;

export const Completed = styled.div`
  display: flex;
  border: 1px solid blue;
  flex-direction: column;
  align-items: center;
`;
