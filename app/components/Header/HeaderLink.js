import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  padding: 0.4em 1.5em;
  margin: 1em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Exo 2', sans-serif;
  font-weight: normal;
  font-size: 16px;
  border: 2px solid #fff;
  color: #000;

  &:active {
    background: #41addd;
    color: #fff;
  }
`;
