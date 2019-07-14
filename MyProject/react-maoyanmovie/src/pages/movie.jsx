import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from "react-router-dom";
import OnShow from './onshow';
import WillShow from './willshow';
import './movie.styl'

class Movie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      refreshScroll: false
    }
  }
  render() {
    const { refreshScroll } = this.state
    return (
      <Router>
        <div className="movie">
          <div className="header">
            猫眼电影
        </div>
          <div className="topbar">
            <div className="showtab">
              <div className="tabitem">
                <NavLink className="navlink" to="/" ><span className="city">城市</span></NavLink>
              </div>
              <div className="tabitem">
                <NavLink className="navlink" to="/OnShow" activeClassName="onactive"><span className="tabname">正在热映</span></NavLink>
              </div>
              <div className="tabitem">
                <NavLink className="navlink" to="/WillShow" activeClassName="onactive"><span className="tabname">即将上映</span></NavLink>
              </div>
              <div className="tabitem">
                <NavLink className="navlink" to="/" ><span className="search">搜索</span></NavLink>
              </div>

            </div>
          </div>
          <div className="showmovie-view">
            <Switch>
              {/* 路由 */}
              <Route path="/OnShow" component={OnShow}></Route>
              <Route path="/WillShow" component={WillShow}></Route>
              <Redirect from="/" to="/OnShow"></Redirect>
            </Switch>
          </div>
        </div>

      </Router>
    );
  }
}

export default Movie;