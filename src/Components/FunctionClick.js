import React, { Component } from 'react'

 class FunctionClick extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Message: 'Hello'
      }
    }
    Handle(){
        this.setState({Message:'hi how are you'})

    }
    
  render() {
    return (
      <div>
        <div>{this.state.Message}</div>
        <button onClick={()=>this.Handle()}>click</button>
      </div>
    )
  }
}

export default FunctionClick

