import React from 'react';
import AddTo from './todo/AddTo';
import TodoLists from './todo/TodoList';
import logo from './logo.svg';
import './App.css';
import Filter from './todo/Filter'
function App() {
  return (
    <div>
      <AddTo />
      <TodoLists />
      <Filter />
    </div>
  );
}

export default App;
