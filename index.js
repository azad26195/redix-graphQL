import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { queryReducer } from "./app/reducers/reducers.js";
import thunkMiddleware from "redux-thunk";

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore)

var  Main= React.createClass({

  render: function() {
    return (
      <div>
        <p>hello react!</p>
      </div>
    );
  }

});

ReactDOM.render(
  <Main/>,
  document.getElementById("example")
);
