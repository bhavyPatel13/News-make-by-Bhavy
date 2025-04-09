import React, { Component } from 'react'
import NAVBAR from './COMPONENT/NAVBAR.js'
import NEWS from './COMPONENT/NEWS.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize = 5;
  render() {
    return (
      <div>
        <Router>
          <NAVBAR/>
          <Routes>
            <Route exact path='/' element={ <NEWS pageSize={this.pageSize} page={1} country="us" />} />
            <Route exact path='/business' element={ <NEWS key='/business' pageSize={this.pageSize} page={1} country="us" category="business" />} />
            <Route exact path='/entertainment' element={ <NEWS key='/entertainment' pageSize={this.pageSize} page={1} country="us" category="entertainment" />} />
            <Route exact path='/general' element={ <NEWS key='/general' pageSize={this.pageSize} page={1} country="us" category="general" />} />
            <Route exact path='/health' element={ <NEWS key='/health' pageSize={this.pageSize} page={1} country="us" category="health" />} />
            <Route exact path='/science' element={ <NEWS key='/science' pageSize={this.pageSize} page={1} country="us" category="science" />} />
            <Route exact path='/sports' element={ <NEWS key='/sports' pageSize={this.pageSize} page={1} country="us" category="sports" />} />
            <Route exact path='/technology' element={ <NEWS key='/technology' pageSize={this.pageSize} page={1} country="us" category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}