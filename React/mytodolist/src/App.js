import React from 'react';
import logo from './logo.svg';
import Add from './components/todolist/add';
import Title from './components/title/title';
import ShowAll from './components/todolist/showall';
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
