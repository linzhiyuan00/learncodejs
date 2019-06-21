import React from 'react'

class Child1 extends React.Component {
  state = {
    a: 1
  }
  /**
   * 更新 static
   * 根据返回值 {}
   * null
   */

   /**
    * willMount props setState
    */
  static getDerivedStateFromProps (props, state) {
    console.log('getDerivedStateFromProps')
    // return null
    return {
      ...props,
      ...state
    }
  }
  componentDidMount () {
    console.log('componentDidMount')
  }
  shouldComponentUpdate () {
    console.log('shouldComponentUpdate')
    return true
  }
  getSnapshotBeforeUpdate () {
    console.log('getSnapshotBeforeUpdate')
    return 7
  }
  // a undefined(15.x.x)  
  // a getSnapshotBeforeUpdate() 16.x.x
  componentDidUpdate = (preProps, preState, a) => {
    console.log('componentDidUpdate',a)
  }
  handleStateChange = () => {
    this.setState({
      a: 17,
      count: this.props.count
    })
  }
  render () {
    console.log('渲染时候 state', this.state)
    return (
      <div>
        <button onClick={this.handleStateChange}>change state</button>
        child1 Component
        
        <p>{this.state.a}</p>
        {this.props.count}
      </div>
    )
  }
}

export default Child1