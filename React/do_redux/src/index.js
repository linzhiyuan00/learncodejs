import { appState } from "./redux/state.js";
import { storeChange } from './redux/storeChange.js';
import { createStore } from './redux/createStore.js';


const { store, dispatch,subscribe} = createStore(appState,storeChange);



function renderHead(state){
  console.log('render head');
  // 两个函数组件
  const head = document.getElementById('head');
  head.innerText = state.head.text;
  head.style.color = state.head.color;
  // state.body.text = '我是经过head修改的body'
}
function renderBody(state){
  console.log('render body');
  const body = document.getElementById('body');
  body.innerText = state.body.text;
  body.style.color = state.body.color;
}

function renderApp(store,oldStore={}) {
  if(store === oldStore) return;
  store.head !== oldStore.head &&
  renderHead(store); // newstate
  store.body !== oldStore.body &&
  renderBody(store); // oldstate
}

subscribe((store,oldStore) =>{
  renderApp(store,oldStore)
})
renderApp(store);
dispatch({type:'BODY_TEXT',text:'我是经过head修改的 body'})
// renderApp(store);//性能开销

