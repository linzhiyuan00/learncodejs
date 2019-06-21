import React from 'react'

class Child extends React.Component {
  state = {
    childCount: 0
  }
  handleChildPropsChange = () => {
    let {childCount} = this.state
    childCount++
    this.setState({
      childCount
    })
  }
  componentWillMount () {
    console.log('componentWillMount')
  }
  componentDidMount () {
    console.log('componentDidMount')
    // setInterval(() => {
    //   console.log('child setinterval')
    // }, 1000);
  }
  // props 更新的
  componentWillReceiveProps () {
    console.log('componentWillReceiveProps')
  }
  // 组件 性能优化的时候需要的，控制不必要的更新
  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate')
    if(nextProps.count !== this.props.count) {
      return true
    }
    return true
  }
  componentWillUpdate () {
    console.log('componentWillUpdate')
  }
  componentDidUpdate () {
    console.log('componentDidUpdate')
  }
  componentWillUnmount () {
    console.log('componentWillUnmount')
  }
  render() {
    const { count } = this.props
    const {childCount } = this.state
    console.log('render')
    return (
      <div>
        <button onClick={this.handleChildPropsChange}>
          child state change
        </button>
        child Component
        count: {count}
        childCount: {childCount}
      </div>
    )

  }

}
export default Child