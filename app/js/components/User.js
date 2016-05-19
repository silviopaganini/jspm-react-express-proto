"use strict";

import React from 'react';

export default class User extends React.Component {
  render() {

    return (
      <div class="user">
        <h1>{this.props.name} {this.props.surname}</h1>
        <h2>{this.props.interests}</h2>
        <h3>{this.props.birthday}</h3>
        <h4>{this.props.facekey}</h4>
      </div>
    )
  }
}
