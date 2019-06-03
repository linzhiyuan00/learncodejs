// function findShort(words){
//   const word = words.split(' ');
//   console.log(word);
//   const chang = word.map(function(i){
//     return i.length;
//   })
//   console.log(chang);
// }


// const findShort = str => str.split(' ').map(w => w.length).sort((a,b) => a - b)[0];
function findShort(str){
  return Math.min.apply(null,str.split(' ').map(w => w.length));
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps'));