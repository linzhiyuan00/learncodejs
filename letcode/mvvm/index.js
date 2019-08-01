const a = {
  b:1
}

function b() {
  console.log("a的值发生改变")
}
// function bindData() {
//   let oldb = a.b;
//   setInterval(() =>{
//     const newb = a.b;
//     if(newb != oldb){
//       b()
//       oldb = newb;
//     }
//   },100)
// }
function bindData() {
  Object.keys(a).map(key => {
    let v = a[key];
    Object.defineProperty(a,key,{
      get() {
        console.log('你正在读取a里面的值');
        return v;
      },
      set(newA) {
        v = newA;
        b()
      }
    })
  })
}
bindData();

for(let i = 0;i < 10; i++){
  a.b = a.b + 1; 
}
// a.b = 3;

console.log(a.b);