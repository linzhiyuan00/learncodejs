import React from 'react';
import { BrowserRouter, Route, Link } from './react-router-dom/index';
import logo from './logo.svg';
import './App.css';
function Home() {
  return "Home"
}
function Detail() {
  return 'Detail'
}
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <ul>
        <li>home</li>
        <li>detail</li>
      </ul>
      <Route path="/" component={Home}/>
      <Route path="/detail" component={Detail}/>
      </BrowserRouter>
    )
  }
}

export default App;
