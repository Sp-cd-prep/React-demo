import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor(){
        super()
        this.state={
            name:"from previous state"
        }
    }

    shouldComponentUpdate(){
        console.log("ShouldcomponentUpdate")
        return true;
    }

    componentDidMount(){
        console.log("componentdidmount")
        setTimeout(()=>{
            this.setState({name:"Current state"})
        },5000)
    }

    componentDidUpdate(prevState){
        console.log("componentDidUpdate")
        if(prevState.name !== this.state.name){
            console.log(this.state.name,"current")
            document.getElementById('statechange').innerHTML= "The state is Updated"
    }
}

  render() {
    console.log("render")
    return (
      <div>
        <h1>{this.state.name}</h1>
        <p id='statechange'></p>
      </div>
    )
  }
}
