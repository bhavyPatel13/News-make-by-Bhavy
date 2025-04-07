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
            <Route exate path='/' element={ <NEWS pageSize={this.pageSize} page={1} country="us" />} />
            <Route exate path='/business' element={ <NEWS pageSize={this.pageSize} page={1} country="us" category="business" />} />
            <Route exate path='/entertainment' element={ <NEWS pageSize={this.pageSize} page={1} country="us" category="entertainment" />} />
            <Route exate path='/general' element={ <NEWS pageSize={this.pageSize} page={1} country="us" category="general" />} />
            <Route exate path='/health' element={ <NEWS pageSize={this.pageSize} page={1} country="us" category="health" />} />
            <Route exate path='/science' element={ <NEWS pageSize={this.pageSize} page={1} country="us" category="science" />} />
            <Route exate path='/sports' element={ <NEWS pageSize={this.pageSize} page={1} country="us" category="sports" />} />
            <Route exate path='/technology' element={ <NEWS pageSize={this.pageSize} page={1} country="us" category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}