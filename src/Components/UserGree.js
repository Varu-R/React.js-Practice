import React, { Component } from 'react'
class UserGree extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn: false
      }
    }

  render() {
    return (
      <div>
       <div>Hello var</div>
        <div>wlcome guest</div>
      </div>
    )
  }
}

export default UserGree
