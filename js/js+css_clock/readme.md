.clock-face{
    position: relative;
    width: 100%;
    height: 100%;
    transform: translateY(-3px);
  }
  .hand{
    width: 50%;
    height: 50%;
    background-color: #000000;
    position: absolute;
    top: 50%;
    transform-origin: 100%;
    /* transform: rotate(90deg); */
    transition: all 0.05s;
    transition-timing-function: cubic-bezier(0.1,2.7,0.58,1);
  }