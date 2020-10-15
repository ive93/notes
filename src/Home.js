import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Content from './components/Content';


const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
  }
`

function Home() {

  return (
    <div className="App">
      <GlobalStyle/>
      <Content/>
    </div>
  );
}


export default Home;
