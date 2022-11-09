import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: this.props.initialValue,
    };
  }

  render() {
    return (
      <div>
        <h3>Class Component</h3>
        <button
          onClick={() => {
            this.setState((current) => {
              return { count: current.count - 1 };
            });
            // this.setNewValue(-1);
          }}
        >
          -
        </button>
        {this.state.count}
        <button
          onClick={() => {
            this.setState((current) => {
              return { count: current.count + 1 };
            });
            // this.setNewValue(+1);
          }}
        >
          +
        </button>
      </div>
    );
  }
  setNewValue = (value) => {
    // this.setState({ count: this.state.count + value });
    this.setState((current) => {
      return { count: current.count + value };
    });
  };
}
