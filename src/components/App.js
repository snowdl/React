import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: Math.ceil(Math.random() * 9),
      second: Math.ceil(Math.random() * 9),
      value: '',
      result: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { first, second } = this.state;
    const correctResult = first * second;
    const userResult = Number(this.state.value);

    console.log(typeof userResult);
    if (correctResult !== userResult) {
      this.setState({
        result: 'x',
      });
    } else if (correctResult === userResult) {
      this.setState({
        result: 'o',
      });
    }
  };

  render() {
    // console.log(this.state.first);
    return (
      <div>
                                 
        <header>
          <div>
             <h1>구구단</h1>
          </div>
        </header>
        <main>
          <h2>
            <div>
               {this.state.first}곱하기{this.state.second}는?             
            </div>
          </h2>
          <form onSubmit={this.handleSubmit}>
            <input type="number" value={this.state.value} onChange={this.handleChange}></input>
            <button type="submit">submit</button>
          </form>
          <div>
            <p>Result : {this.state.result}</p>
          </div>
        </main>
      </div>
    );
  }
}
