// 年终奖
// ali 14.6w  2.6月
// meituan 16w  4月
// 51信用卡 17w   5月
// S 5
// A 3
// B 2
// C 1
// D
// level key 计算函数？

let stratigies = {
  'S':function(salary){
    return salary * 5;
  },
  'A':function(salary){
    return salary * 3;
  },
  'B':function(salary){
    return salary * 2;
  },
  'C':function(salary){
    return salary * 1;
  }
}
function calculate(level,salary){
  return stratigies[level](salary);
  // switch(level){
  //   case 'S':
  //     return salary * 5;
  //     break;
  //   case 'A':
  //     return salary * 3;
  //     break;
  //   case 'B':
  //     return salary * 2;
  //     break;
  //   case 'C':
  //     return salary * 1;
  //     break;
  //   default:
  //     return salary * 0;
  // }
}
console.log(calculate('S',10000));