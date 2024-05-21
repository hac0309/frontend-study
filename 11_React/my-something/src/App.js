import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import logo from './logo.svg';
import './App.css';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <GlobalStyle/>
  );
}

export default App;
