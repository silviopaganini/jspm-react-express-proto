"use strict";

import React from 'react';

import Basket from './components/Basket';
import User from './components/User';
import Dispatcher from './dispatcher/appDispatcher';
import ActionTypes from './constants/actionTypes';

export default class App extends React.Component {

  constructor(props)
  {
    super(props);

    Dispatcher.register( action => {

      switch (action.actionType) {

        case ActionTypes.INITIALISE:
          // this.setState(action.initialData);
          break;

      }
    });

    // console.log(this.state);
  }

  // componentDidMount()
  // {
  //
  // }

  render()  {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}
