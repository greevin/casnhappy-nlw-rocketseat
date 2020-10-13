import React from 'react';

import Routes from './routes';

// JSX - Javascript XML
// Componente: função que retorna um HTML/JSX

// Interface: define o formato de um objeto recebido por uma função
// interface TitleProps {
//   text: string;
// }

// componente filho
// function Title(props: TitleProps) {
//   return <h1>{props.text}</h1>
// }

// componente pai
function App() {
  return (
    <Routes />
  );
}

export default App;
