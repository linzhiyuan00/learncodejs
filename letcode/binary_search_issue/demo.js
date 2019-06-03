// let bb = [1,2,3,6,9,13,18,23,58];

function binary_search(arr,data){
  // 不停地去二分，
  // 停下来？没得再分 min > max
  let min = 0,
      max = arr.length -1,
      mid;

  while(min <= max){
    // mid = parseInt((min + max) / 2);
    mid = min + parseInt((max - min) / 2);
    // mid = min + ((max - min)) >> 1;
    if(arr[mid] > data){
      //取左边的一半
      max = mid -1;
    }else if(arr[mid] < data){
      //取右边的一半
      min = mid +1;
    }else{
      return mid;
    }
  }
  return -1;
}

console.log(binary_search([1,4,7,9,10,12],10));

// let arr=[];
// for(let i = 0;i < 100000;i++){
//   arr.push(i);
// }

// console.log(binary_search(arr,2019));

// console.log(binary_search(bb,6));