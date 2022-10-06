import React from 'react';
import Routers from './routes/Routers';
import { createGlobalStyle } from 'styled-components';
import {Reset} from 'styled-reset';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');
* {
  font-size:85%;
  background:${props => props.theme.bgColor};
  transition: 0.25s ease-in;
  text-decoration: none;
  color : ${props => props.theme.textColor};
  box-sizing: border-box;
}
body {
  font-family: 'Noto Sans KR', sans-serif;
}

`;


function App() {
  return (
    <>
    <Reset />
    <GlobalStyle />
    <Routers />
    </>
  );
}

export default App;
