import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["?", "?", "?", "?", "?", "?", "?", "?", "?"]
    }
  }

  handleGamePlay = (index) => {
    alert(index)
  }

  render(){
    return(
      <React.Fragment>
        <h1>Treasure Hunt App</h1>
        <div id="gameboard">
          { this.state.squares.map((value, index) => {
            return (
              <Square
                value={ value }
                key={ index }
                index={ index }
                handleGamePlay= { this.handleGamePlay }
              />
            )
          }) }
        </div>
      </React.Fragment>
    )
  }
}
export default App
