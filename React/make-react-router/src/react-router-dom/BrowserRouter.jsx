import React from 'react';
import { createBrowserHistory as createHistory } from "history";
import { Router } from '../react-router/index';

class BrowserRouter extends React.Component {
  // #
  // createHashHistory
  // react-router-native
  // createMemoryHistory
  // h5 history api pushState
  history = createHistory(this.props);
  render() {
    console.log(this.history);
    return (
      <Router history={this.history}
        children={this.props.children}
      />
    )
  }
}
export default BrowserRouter;