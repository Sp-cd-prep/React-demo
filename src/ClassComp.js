import React, { Component } from 'react'
import Class from './Class'
import Function from './Function'

export default class ClassComp extends Component {
  constructor(){
    super()
    this.state={
      count:0,
      functionClick:false,
      ClassClick:false
    }
  }
  render() {
    return (
      <div>
        <button onClick={()=>this.setState({functionClick:!this.state.functionClick})}>Function</button>
        <button onClick={()=>this.setState({ClassClick:!this.state.ClassClick})}>class</button>
        {/* {this.state.functionClick? <Function /> : null}   
        {this.state.ClassClick? <Class /> : null}    */}
        {this.state.functionClick && <Function/>}
        {this.state.ClassClick && <Class/>}
      </div>
    )
  }
}
