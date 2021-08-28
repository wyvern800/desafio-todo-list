import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
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
`;
