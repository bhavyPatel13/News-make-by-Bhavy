import React, { Component } from 'react'
import NAVBAR from './COMPONENT/NAVBAR.js'
import NEWS from './COMPONENT/NEWS.js'

export default class App extends Component {
  render() {
    return (
      <div>
        <NAVBAR/>
        <NEWS pageSize={2}/>
      </div>
    )
  }
}