import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      output: '',
    };
  }

  handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const result = eval(this.state.input);
        if (!isNaN(result)) {
          this.setState({ output: result });
        } else {
          this.setState({ output: 'Error' });
        }
      } catch (error) {
        this.setState({ output: 'Error' });
      }
    } else if (value === 'C') {
      this.setState({ input: '', output: '' });
    } else {
      this.setState((prevState) => ({
        input: prevState.input + value,
      }));
    }
  };

  render() {
    return (
      <div className="calculator-container">
        <div className="calculator">
          <div className="display">
            <input
              type="text"
              value={this.state.input}
              readOnly
              style={{ fontSize: '72px', height: '60px', background-color: black;  }} 
            />
            <div className="result" style={{ fontSize: '24px' }}>{this.state.output}</div> 
          </div>
          <div className="buttons">
            <div className="row">
              <button onClick={() => this.handleButtonClick('C')} style={{ fontSize: '24px', width: '20%' }}>C</button> 
              <button onClick={() => this.handleButtonClick('%')} style={{ fontSize: '24px', width: '20%' }}>%</button>
              <button onClick={() => this.handleButtonClick('.')} style={{ fontSize: '24px', width: '20%' }}>.</button>
              <button onClick={() => this.handleButtonClick('/')} style={{ fontSize: '24px', width: '20%' }}>/</button>
            </div>
            <div className="row">
              <button onClick={() => this.handleButtonClick('7')} style={{ fontSize: '24px', width: '20%' }}>7</button>
              <button onClick={() => this.handleButtonClick('8')} style={{ fontSize: '24px', width: '20%' }}>8</button>
              <button onClick={() => this.handleButtonClick('9')} style={{ fontSize: '24px', width: '20%' }}>9</button>
              <button onClick={() => this.handleButtonClick('*')} style={{ fontSize: '24px', width: '20%' }}>*</button>
            </div>
            <div className="row">
              <button onClick={() => this.handleButtonClick('4')} style={{ fontSize: '24px', width: '20%' }}>4</button>
              <button onClick={() => this.handleButtonClick('5')} style={{ fontSize: '24px', width: '20%' }}>5</button>
              <button onClick={() => this.handleButtonClick('6')} style={{ fontSize: '24px', width: '20%' }}>6</button>
              <button onClick={() => this.handleButtonClick('-')} style={{ fontSize: '24px', width: '20%' }}>-</button>
            </div>
            <div className="row">
              <button onClick={() => this.handleButtonClick('1')} style={{ fontSize: '24px', width: '20%' }}>1</button>
              <button onClick={() => this.handleButtonClick('2')} style={{ fontSize: '24px', width: '20%' }}>2</button>
              <button onClick={() => this.handleButtonClick('3')} style={{ fontSize: '24px', width: '20%' }}>3</button>
              <button onClick={() => this.handleButtonClick('+')} style={{ fontSize: '24px', width: '20%' }}>+</button>
            </div>
            <div className="row">
              <button onClick={() => this.handleButtonClick('0')} style={{ fontSize: '24px', width: '20%' }}>0</button>
              <button onClick={() => this.handleButtonClick('00')} style={{ fontSize: '24px', width: '20%' }}>00</button>
              <button onClick={() => this.handleButtonClick('.')} style={{ fontSize: '24px', width: '20%' }}>.</button>
              <button onClick={() => this.handleButtonClick('=')} style={{ fontSize: '24px', width: '20%' }}>=</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
