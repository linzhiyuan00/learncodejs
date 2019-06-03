// 面向对象的世界，创建很多对象，策略对象
// 实现了同样的接口，calculate ，互换策略 ，策略模式
function performanceS() {
}
performanceS.prototype.caculate = function(salary) {
  return salary * 5;
}
function performanceA() {
}
performanceA.prototype.caculate = function(salary) {
  return salary * 3;
}
function performanceB() {
}
performanceB.prototype.caculate = function(salary) {
  return salary * 2;
}
function performanceC() {
}
performanceC.prototype.caculate = function(salary) {
  return salary * 1;
}
// 面向对象
var Bounce = function (salary) {
  this.salary = salary
}
Bounce.prototype.setStrategy = function (strategy) {
  this.strategy = strategy;

}
Bounce.prototype.getBounce = function () {
  return this.strategy.caculate(this.salary);
} 
const bounce = new Bounce(10000);
bounce.setStrategy(new performanceS());
console.log(bounce.getBounce());

const bounce2 = new Bounce(5000);
bounce2.setStrategy(new performanceA());
console.log(bounce2.getBounce());



