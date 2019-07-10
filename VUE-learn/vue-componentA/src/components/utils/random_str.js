 export default function a(len = 32) {
  const $char ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  // const str=[]
  // for(let i =0;i <32;i++){
  //   let index =Math.floor(Math.random()*62) 
  //   str.push($char[index])
  // }
  // console.log(str.join(''))
  const maxPos = $char.length
  let str = ''
  for(let i = 0;i <len;i++){
    str +=$char.charAt(Math.floor(Math.random()*maxPos) )
  }
  console.log(str)
  return str
}

a();
