import React, { Component } from 'react'

export default class SubClass extends Component {
  render() {
    console.log("Subclass");
    return (
      <div>
        {this.props.Fullname}
      </div>
    )
  }
}
