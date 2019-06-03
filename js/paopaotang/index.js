// 玩家1 玩家2。。。。
// object 类
// JSON object 难以完成此job
//玩家类  es5  没有class关键字
//大写首字母的函数  构造函数
// 函数可以用来构建类?
// 一个函数首字母大写约束，区别于普通函数 ，运行的方式 new ，就是构造函数

// 函数是js里面的一等函数，js 除了基本类型以外，都是对象Object,函数是可以被运行的对象

function Player(name){
    // js 跟其他语言不一样，函数内部一定会存在一个this，指针，总会指向点什么
    // 常在，答应
    // this 指向实例化后的对象
    // console.log(this);
    this.name = name;
    this.enemy = null;

}
Player.prototype.win = function(){
    console.log(this.name+"win");
}
Player.prototype.lose = function(){
    console.log(this.name+"lose");
}
//  将类实际化  类抽象的概念，  对象可以new 出来

// 上线
var Player1 = new Player("皮蛋");
console.log(Player1.name+"上线了");
var Player2 = new Player("小乖");
console.log(Player2.name+"上线了");

// 成为对手的过程 来一把
Player1.enemy = Player2;
Player2.enemy = Player1;

// 游戏的过程
Player1.win();
Player2.lose();
// console.log(Player1.name);
// console.log(Player2.name);