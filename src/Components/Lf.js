import React, { Component } from 'react'

export class Lf extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Name:'karyun'
      }
      console.log('LifecycleA constructor')
    }
    static getDerivedStateFromProps(props, statee){
       console.log('LifecycleA getDerivedStateFromProps')
        return null
      
      
    }
    componentDidMount(){
      console.log('LifecycleA componentDidMount')
    }
    
  render() {
    console.log("render")
    return (
      <div>
        Lifecycle A
      
      </div>
    )
  }
}

export default Lf
