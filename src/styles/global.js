import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  font-family: 'Viga', sans-serif;
  font-size: 14px;
  text-align: center;
  margin-top: 50%;
}

body, html {
  background-color: rgb(26,27,31);
  margin: auto;
  width: 50%;
}
`;
