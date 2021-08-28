import styled from 'styled-components';

export const Container = styled.div`
padding: 20px;
border: 1px solid red;

    form {
      div {
        display: flex;
        margin-bottom: 10px;

      input {
      display: flex;
      flex-grow: 2;
      border-radius: 8px 0 0 8px;
      border-right: 0;

      &::placeholder {
        color: #b3b0b5;
        text-align: center;
        }
      }

      button {
        display: flex;
        color: purple;
        border-radius: 0 8px 8px 0;
        border-left: 0;
       }
    }
  }

`;

export const ListsWrapper = styled.div`
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;

    * {
      font-size: 12px;
    }

    div {

    }
  }

  border: 1px solid orange;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;

  h1 {
    color: purple;
  }


  ul {
    list-style-type: none; /* Remove bullets */
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margins */

  li {
    cursor: pointer;
    border: 1px solid black;
    padding: 5px;
    border-radius: 10px;
    margin: 10px;
    display: flex;
    align-items: center;

    input {
      margin-right: 6px;
    }

    button {
      margin-left: 6px;
      border-radius: 50px;
      border: 0px;
      background-color: #ff3700;
    }
  }
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
