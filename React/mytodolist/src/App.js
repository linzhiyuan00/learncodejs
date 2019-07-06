import React from 'react';
import logo from './logo.svg';
import Add from './container/add';
import Title from './components/title/title';
import ShowAll from './container/showall';
import './App.css';

function App() {
  return (
    <div>
      <Title />
      <Add></Add>
      <ShowAll></ShowAll>
    </div>
  );
}

export default App;
