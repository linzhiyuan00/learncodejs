const people = [
  { age: 46,name:'roger'},
  { age: 99,name:'vinny'},
  { age: 26,name:'don'},
  { age: 74,name:'brendan'},
]

var orderPeople = function
(people){
  return people.sort((a,b) => {
    return a.age - b.age;  // 默认a-b>0  执行升序排序
  })
}
console.log(orderPeople(people));