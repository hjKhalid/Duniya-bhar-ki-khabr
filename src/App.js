import React, { Component } from 'react'
import News from './component/News'
import Navbar from './component/Navbar'
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div  className='container'>
        <News/>
        </div>
      
      </div>
    )
  }
}
