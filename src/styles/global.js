import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
// Trocar estilos da scrollbar
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background: #666;
}
::-webkit-scrollbar-thumb {
  background: #c2c2c2;
  border-radius: 100px;
}

* {
  font-family: 'Viga', sans-serif;
  font-size: 14px;
  outline: none;
}

body, html {
   background-color: rgb(26,27,31);
}

// Remover seleção de texto nos demais componentes
body {
  -webkit-user-select: none;
     -moz-user-select: -moz-none;
      -ms-user-select: none;
          user-select: none;
}

// Liberar seleçãode texto em inputs
input,
textarea {
     -moz-user-select: text;
     user-select: text;
}

// Container principal
.main-container {
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
}
`;
