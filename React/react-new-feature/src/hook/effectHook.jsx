import React, { useEffect, useState } from 'react';
function EffectHookDemo() {
  const [count, setCount] = useState(0);
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  });
  const onResize = () => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  }
  useEffect(() => {
    document.title = count;
  },[count])
  // 控制  useEffect 执行
  // 只有数组每一项都不变的时候  useEffect  才不会执行
  useEffect(() => {
    console.log(1111)
    window.addEventListener('resize', onResize)
    // unMount 执行
    return () => {
      window.addEventListener('resize', onResize)
    }
  }, [])
  return (
    <button
      onClick={() => {
        setCount(count + 1)
      }}
    >
      click: {count},
        size: {size.width} X {size.height}
    </button>
  )
}

export default EffectHookDemo;