import React from "react";
import ReactDOM from "react-dom";

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
