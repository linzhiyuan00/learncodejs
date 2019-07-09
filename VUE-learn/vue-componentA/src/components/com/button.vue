<template>
  <button @click="handle" :class="'i-button-size' + size" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
// 判断参数是否是其中之一
function oneOf(value,vaildList) {
  for(let i = 0;i < vaildList.length;i++){
    if(value === vaildList[i]){
      return true
    }
  }
  return false
}
import bus from '../../common/bus'
export default {
  props:{
    size:{
      validator (value) {
        return oneOf(value,['small','large','default'])
      },
      default:'default'
    },
    disabled:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      msg:'我是button里面的数据'
    }
  },
  methods: {
    handle(){
      bus.$emit('todo',this.msg)
    }
  },

}
</script>

<style>
button{
  border-radius: 5px;
  cursor: pointer;
  outline: none;
}
.i-button-sizelarge{
  padding: 12px;
}
.i-button-sizedefault{
  padding: 8px;
}
.i-button-sizesmall{
  padding: 4px;
}

</style>
