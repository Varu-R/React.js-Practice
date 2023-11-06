import React, {  Component } from 'react'


class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parent:'parent'
      }
      this.greet=this.greet.bind(this)
    }
    greet(){
        alert(`Hello ${this.state.parent}`)
    }
  render() {
    return (
      <div>
        <child/>
      </div>
        
    )
  }
}

export default Parent
