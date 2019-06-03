// var s = ["s","g","j","y","c"];
// console.log(s);
//  s.splice(2,1);
// console.log(s);
function permutations(string) {
  var size=string.length;
  string=string.split("");
  return diet(queue(string,size));
}
function queue(arr, size) {
  var allResult = [];

  (function (arr, size, result) {
    console.log("result",result);
    if (result.length == size) {
      allResult.push(result);
    } else {
      for (var i = 0; i < arr.length; i++) {
        console.log("i",i)
        var newArr = [].concat(arr),
          curItem = newArr.splice(i, 1);
          console.log("===",curItem,"newArr",newArr);
        arguments.callee(newArr, size, [].concat(result, curItem));
      }
    }
  })(arr, size, []);

  return allResult.map(e=>{return e.join("")}).sort();
}
function diet(allResult){
  var finalresult=[];
  for(let i=0;i<allResult.length;i++){
    if(allResult[i]!==allResult[i+1]){
      finalresult.push(allResult[i]);
    }
  }
  return finalresult;
}
console.log(permutations("abcd")); 