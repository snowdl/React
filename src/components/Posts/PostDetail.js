import React, { Component } from 'react';
import { random } from 'node-forge';

export default class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [
        {
          id: 0,
          Company: 'Google',
          CEO: 'Sundar Pichai',
        },
        {
          id: 1,
          Company: 'Rakuten',
          CEO: 'Mikitani Hiroshi',
        },
        {
          id: 2,
          Company: 'Alibaba',
          CEO: 'Jack Ma',
        },
      ],
      value: '',
      result: '',
      randomNum: null,
    };
  }
  componentWillMount() {
    this.handleRandomNum();
  }

  handleRandomNum = () => {
    const { info } = this.state;
    const fromNum = info[0].id;
    const toNum = info[info.length - 1].id;
    const test = this.randomInt(fromNum, toNum);
    this.setState({
      randomNum: test,
    });
  };

  renderContent = e => {
    const { info } = this.state;
    console.log(info[this.state.randomNum].id, 'random');
    return <div>{info[this.state.randomNum].Company}</div>;
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  randomInt = (from, to) => {
    return Math.floor(Math.random() * (to - from + 1) + from);
  };

  handleSubmit = e => {
    const ceoName = this.info[test].CEO;
    const userResult = this.state.value;
    if (ceoName === userResult) {
      this.setState({
        result: 'o',
      });
    } else if (ceoName !== userResult) {
      this.setState({
        result: 'x',
      });
    }
  };

  render() {
    console.log(this.state.randomNum);
    return (
      <div>
        <h1>Please insert IT Ceo's name</h1>
        <div>{this.renderContent()}</div>
        <form onSubmit={this.handleSubmit}>
          <input type="text"></input>                                  
          <button type="submit" value={this.state.info.Company} onClick={this.handleChange}>
            submit                 
          </button>
          <p>Result:</p>
        </form>
      </div>
    );
  }
}
