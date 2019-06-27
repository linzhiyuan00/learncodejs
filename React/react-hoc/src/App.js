import React from 'react';
import logo from './logo.svg';
import LoginStatus from './LoginStatus';
import ShopCart from './ShopCart';
import WithLogin from './WithLogin';
import './App.css';
import withLogin from './WithLogin';
import ExampleMobx from './exampleMobx/index';
import examplebase from './examplebase/index';

// const WithLoginStatus = withLogin(LoginStatus);
// const WithShopCart = WithLogin(ShopCart);
function App() {
  return (
    // <React.Fragment>
    <>
    <LoginStatus />
    <ShopCart />
    {/* </React.Fragment> */}
    {/* <WithLoginStatus />
    <WithShopCart a="1" b="2"/> */}
    <ExampleMobx/>
    </>
  );
}

export default App;
