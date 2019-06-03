// 位移运算符  右移
// 针对二进制位  0000 1011 
// 利用位移运算，/2 *2 的效果  
// console.log(11>>1); //右移 0000 0101
// console.log(11<<1); // 左移 0001 0110


// 猛哥给蜗牛买香蕉
// N pils of banans  每挂香蕉上的香蕉数量不一样 一共多少
//  数组 []  [3,6,7,11]  H小时内吃完  一小时吃几根香蕉 一小时内吃mid根香蕉， 一次只能吃一把
// 最少吃几根 ， 可以在H小时内吃完

/** 
 * @desc 最少吃香蕉的速度，在规定时间内吃完
 * @param {number[]} piles
 * @param {number}    H
 * @param {number}    
*/
function minEatingSpeed (piles,H){
  let lo = 1;
    hi = Math.max(...piles);
    // 二分查找，一直丢一半
    while(lo <= hi){
      // lo++;
      let mid = lo +((hi-lo) >> 1);
      if(canEatAllBanans(piles,H,mid)){
        hi = mid - 1;
      }else{
        //没有吃完  吃完？
        // 小的一半值都没有意义
        lo = mid + 1;

      }
    } 
  return lo;
}

/**
 * @desc 判断是否能吃完香蕉
 * @param {numbers[]} pils 
 * @param {number} H 
 * @param {number} mid
 * @param {boolean} 
 */

function canEatAllBanans(piles,H,mid){
  let h = 0;
  //mid，余下吃完
  for(let pile of piles){
    h += Math.ceil(pile/mid);
  }
  return h<=H;
}
let piles = [3,6,7,11];
// console.log(canEatAllBanans(piles,8,4));
console.log(minEatingSpeed(piles,8));
// - 吃完香蕉目标？
// H 小时内吃完
// - 最小的一个数