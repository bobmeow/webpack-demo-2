import React, { Component } from 'react'

export default class Cheesy extends Component {
  render() {
    return(
      <div>
        <h1>{ this.props.flav }</h1>
      </div>
    )
  }
}
