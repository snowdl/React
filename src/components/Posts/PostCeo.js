import React, { Component } from 'react';

export default class PostCeo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [
        {
          id: 1,
          Company: 'Google',
          CEO: 'Sundar Pichai',
        },
        {
          id: 2,
          Company: 'Rakuten',
          CEO: 'Mikitani Hiroshi',
        },
        {
          id: 3,
          Company: 'Alibaba',
          CEO: 'Jack Ma',
        },
      ],
    };
  }

  render() {
    const { id, Company, CEO } = this.props.info;

    return (
      <div>
        <div>
          <h1>{id}</h1>
        </div>
        <div>
          <h1>{Company}</h1>
        </div>
        <div>
          <h1>{CEO}</h1>
        </div>
      </div>
    );
  }
}
