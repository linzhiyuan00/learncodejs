import { sync,testIsArray } from './components/sync/index';
// document.getElementById('app').innerHTML = '入口文件'
document.getElementById('btn').addEventListener('click',function(){
  // 执行async代码
  import(/*webpackChunkName:'async' */ './components/async/index.js')
  .then(_=>{
    _.default.init();
  })
})
sync(); 
// testIsArray();