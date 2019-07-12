import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from "react-router-dom";
import './App.css';
import movie from './pages/movie';
import cinema from './pages/cinema';
import mine from './pages/mine';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          猫眼电影
        </div>
        <div className="tabbar">
          <div className="tabbar-item">
            <NavLink className="nav-link" to="./movie"><span>电影</span></NavLink>
          </div>
          <div className="tabbar-item">
            <NavLink className="nav-link" to="./cinema"><span>影院</span></NavLink>
          </div>
          <div className="tabbar-item">
            <NavLink className="nav-link" to="./mine"><span>我的</span></NavLink>
          </div>



        </div>
        <Switch>
          <Route path="/movie" component={movie}></Route>
          <Route path="/cinema" component={cinema}></Route>
          <Route path="/mine" component={mine}></Route>
          {/* <Route path="/" component={Recommand}></Route> */}
          <Redirect from="/" to="/movie"></Redirect>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
