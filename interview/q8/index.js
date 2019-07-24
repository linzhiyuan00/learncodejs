// p._proto_ = Person.prototype
// Person._proto_ = Function.prototype

// var foo = {},
//   F = function() {};
// Object.prototype.a = 'valA';
// Function.prototype.b = 'valB';
// console.log(foo.a)
// console.log(foo.b)
// console.log(F.a)
// console.log(F.b)


// function Person(name) {
//   this.name = name
// }
// function Student() {

// }
// Student.prototype = Person.prototype
// Student.prototype.constructor = Student
// let p = new Student('wn')
// // console.log(p instanceof Person)

// for(var i = 0;i < 10; i++) {
//   setTimeout(() => {
//     console.log(i)
//   },0)
// }
//  let 每次循环生成一个封闭的块级作用域和setTimeout绑定，var 每次会覆盖上一次的作用域



// -------- 构造函数是不需要返回值的，使用new来创建时，
// 如果return 的是非对象，会忽略返回值，如果是对象，则返回该对象 （return null 也会忽略返回值）


//  for in  迭代和 for of 有什么区别
Array.prototype.method = function() {
  console.log('wn')
}
var  myArray = [1,2,3,4,5,6,7,8];
myArray.name = '蜗牛'
for(let index of myArray) {
  console.log(index)
}

// for in 
//  1. index 是索引为字符串型数字，不能进行几何运算
//  2. 遍历的顺序有可能不是按照实际数组的内部顺序
//  3. 使用for in 会遍历数组所有的可枚举属性，包括原型
//  for in 更适合遍历对象

// for of
// for in 遍历的是数组的索引(键名)， 而for of 遍历的是数组的元素
// for of 遍历的只是数组的元素，而不包括数组的原型属性和索引

let gArr = [1,[2,3],4,5,[6,7,[3,2,8]]]
let oArr = [1,2,3,4,5,6,7,3,2,8]

// function outputArr(arr) {
//   var res  =[]
//   for(var i = 0;i < arr.length;i++){
//     if(Array.isArray(arr[i])){
//       res = res.concat(outputArr(arr[i]))
//     }else {
//       res.push(arr[i])
//     }
//   }
//   return res
// }

function outputArr(arr) {
  return arr.reduce(function(pre,item) {
    return pre.concat(Array.isArray(item) ? outputArr(item) : item)
  },[])
}
console.log(outputArr(gArr));


