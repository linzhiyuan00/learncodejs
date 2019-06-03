function generateHashtag(str){

  return ( str.length >140 || str === '' ) ? false : '#' + str.split(' ').map(capitalize).join(' ') ;
  // if(str.length>140){
  //   return false;
  // }
  // if(str.length === ''){
  //   return false;
  // }
  // str = '#' + str;
  // return str;
}

function capitalize(w) {
  console.log(w);
  return w.charAt(0).toUpperCase() + w.slice(1);
}

console.log(generateHashtag('How are you'));
console.log(generateHashtag(''));
console.log(generateHashtag('How are you How are you How are you How are you How are you How are you How are you vHow are you How are youvHow are you How are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are you'));

// How Are You