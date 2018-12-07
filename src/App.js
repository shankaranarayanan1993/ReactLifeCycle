import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./lifecycle";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            mount : false,
            ignoreProps : 0,
            generateSeed: 40
        }
        this.mount = () => this.setState({mount:true});
        this.unMount = () => this.setState({mount:false});
        this.ignoreProps = () => this.setState({ignoreProps:Math.random()});
        this.generateSeed = () => this.setState({generateSeed: Number.parseInt(Math.random() * 100)});
    }
  render() {
    return (
      <div className="App">
          <div>
              <button onClick={this.mount} disabled={this.state.mount}>Mount </button>
              <br/>
              <button onClick={this.unMount} disabled={!this.state.mount}>Un Mount </button>
              <br/>
              <button onClick={this.generateSeed} >Ignore Props</button>
          </div>
        <header className="App-header">
            <br/>
            <button onClick={this.generateSeed} >Generate Seed</button>
            {this.state.mount ?
                <Counter
                ignoreProps = {this.state.ignoreProps}
                generateSeed = {this.state.generateSeed}
                /> : null }
        </header>
      </div>
    );
  }
}

export default App;
