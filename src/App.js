import React from 'react';
import {connect} from 'react-redux'
// import logo from './logo.svg';
import './App.css';
import { INCREMENT, DECREMENT, RESET } from './store/types';
class App extends React.Component {
  handleIncrement = () => {
    this.props.dispatch({type:INCREMENT})
  }
  handleDecrement = () =>{
    this.props.dispatch({type:DECREMENT})
  }
  handleReset = () => {
    this.props.dispatch({type:RESET})
  }
  render() { 
    return (
      <div className="App">
  <h1>{this.props.count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}
 

 
  

function mapState(state){
  return state;
}

export default connect(mapState)(App);
