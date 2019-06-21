## 挂载阶段
第一次挂载
componentWillMount
componentDidMount

## 更新阶段
  shouldComponentUpdate
  true 更新
  false 不更新

  componentWillUmount
  清理
  定时器
  全局的事件绑定

## red blue
// parent  state
{
  themes: 'red'
}
层层传递
父组件 -> 子组件 -> 孙组件 ...
1. 父组件 通过 getChildContext 返回提供的 context 内容
2. 父组件 .childContextTypes 定义提供的 context 类型
3. 子组件获取的时候 .contextTypes 定义接受的类型 this.context 获取
<!-- 4. vuex 全局变量  -->

问题: 
  15版本(15.x.x)：跨层级传递的时候，如果中间某一个组件的showComponentUpdate返回值为false，导致跨层级失败，获取不到context的数据(同步不了)

  16版本(16.x.x)：
    1. 构造 Provider Consumer
    2. 父组件 <Provider value={} /> 提供数据
    3. 后代组件 <Consumer> { (value) => {} }</Consumer>

state = {
  theme: 'purple',
  toggle: this.handleToggletheme
}
静态属性 无法获取 实例的 this