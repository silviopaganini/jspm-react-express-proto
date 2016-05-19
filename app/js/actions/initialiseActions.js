"use strict";

import Dispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';

export default {

  // onData: function(e){
  //   Dispatcher.dispatch({
  //     actionType: ActionTypes.SOCKET_DATA,
  //     data: e
  //   });
  //
  // },

  initApp : function()
  {
    Dispatcher.dispatch({
      actionType : ActionTypes.INITIALISE,
      initialData : {}
    });
  }

};
