import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  color: lightgray;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;

  // Aplicar estilo em telas menores
  @media screen and (max-width: 600px) {
    div.credits {
      font-size: 7px;
    }
  }

  div.credits {
    display: flex;
    justify-content: space-between;
    width: 90vw;
    max-width: 50rem;

    div {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      span {
        color: red;
        margin-left: 5px;
        margin-right: 5px;
      }

      .author {
        color: #666;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      }
    }

    a {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      color: #666;
      text-decoration: none;

      &:hover {
        color: ${shade(0.2, '#666')}
      }
    }
  }
`;
