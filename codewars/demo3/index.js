const nums = ['c','a','z','y'];
const nums2 = [1,10,2,28];
// 将字符按照字符顺序排序
// sort() 字符排序函数
console.log(nums.sort());
console.log(nums2.sort(function
  (a,b){
    console.log(a,b,a-b>0);
    return a - b > 0;
    // console.log(a,b,'--------');
}));




