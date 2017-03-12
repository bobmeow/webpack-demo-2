import React, { Component } from 'react'
import Cheesy from './cheesy'

export default class Test extends Component {
  render() {
    return(
      <div>
        <h1>{ this.props.nugget }</h1>
        <h1>hello</h1>
        <Cheesy flav='mozz' />
      </div>
    )
  }
}
