import React, { Component } from "react";

class BasicCounter extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({ count: ++this.state.count });
  };

  render() {
    return (
      <React.Fragment>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </React.Fragment>
    );
  }
}

export default BasicCounter;
