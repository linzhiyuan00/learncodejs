import React from 'react';
import logo from './logo.svg';
import './App.css';
import ConcurrentModeDemo from './ConcurrentMode/index';
import StateHook from './hook/stateHook';
import PrepareForEffrctHook from './hook/prepareForEffrctHook';
import EffectHook from './hook/effectHook';
import ReducerHookDemo from './hook/ReducerHook';

function App() {
  return (
    <div>
      ReducerHook:<ReducerHookDemo />
      {/* EffectHook:<EffectHook />
      PrepareForEffrctHook:<PrepareForEffrctHook />
      StateHook:<StateHook /> */}
      {/* <ConcurrentModeDemo /> */}
    </div>
  );
}

export default App;
