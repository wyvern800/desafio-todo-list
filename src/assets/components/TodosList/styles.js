import styled from 'styled-components';


export const Container = styled.div`
 @media screen and (max-width: 600px) {
  margin: 2rem auto 0;
}

padding: 20px;
//border: 1px solid red;
background: white;
border-radius: 10px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

width: 90vw;
max-width: 50rem;
margin: 7rem auto 0;

header {
  display:flex;
  justify-content: center;
  font-size: 18px;
  margin-bottom: 10px;
}

button {
  outline: none;
}

    form {
      div {
        display: flex;
        margin-bottom: 10px;

      input {
      display: flex;
      flex-grow: 2;
      border-radius: 8px 0 0 8px;
      border-right: 0;
      border: 0;
      background-color: lightgray;
  background-color: rgb(238, 238, 238);
  margin-bottom: 0.5rem;
  transition: all 0.3s linear;
  padding: 0.25rem 1rem;

  &&:focus {
    border: 2px solid black;
  }

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

export const Controls = styled.div`

    button.btn-remove, .btn-edit {
      background: transparent;
  border-color: transparent;
  cursor: pointer;
  transition: all 0.3s linear;
    }

    .btn-edit {
      color: hsl(125, 71%, 66%);

      &:hover {
        color: hsl(125, 67%, 44%);
      }
    }

    .btn-remove {
      color: hsl(360, 71%, 66%);

      &:hover {
        color: hsl(360, 67%, 44%);
      }
    }
`;

export const ListsWrapper = styled.div`
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;

    * {
      //font-size: 12px;
    }

    div {

    }
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


  ul {
    list-style-type: none; /* Remove bullets */
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margins */
  width: 100%;

  li:not(:first-child) {
      margin-top: 6px;
  }

  li:hover {
    transform: translateX(6px);
    transition: background-color .3s ease-in-out;
    transition: transform 0.1s;
    background-color: hsla(243, 3%, 75%, 0.29);
  }

  li:not(:hover) {
    transition: background-color .3s ease-in-out;
    transition: transform 0.1s;
  }

  li {
    border: 1px dotted lightgray;
    border-radius: 3px;
    margin: 2px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: hsl(210, 36%, 96%);
    box-shadow: 0 3px 6px rgb(0 0 0 / 8%);

    label {
      display: block;
      // background-color: orange;
      border-radius: 10px;
      padding: 10px;
      margin-bottom: 0;

      &:hover {
        cursor: pointer;
      }
    }

    input {
      margin-right: 6px;
    }
  }
  }
`;

export const Clear = styled.div`
  cursor: pointer;
  margin-top: 10px;
`;

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

export const Errors = styled.div`
  margin-bottom: 1rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-size: 0.7rem;
  text-transform: capitalize;
  border: 1px dashed gray;
  padding: 12px;
  // background-color: rgba(34, 158, 0, 0.46);

  background-color: ${props => props.bgColor ? props.bgColor : "white"};

  // hsl(360, 67%, 44%)
`;
