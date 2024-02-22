import React, { Component } from "react";

interface Props {
  initialValue: number;
}

interface IState {
  counterValue: number;
}

class Counter extends Component<Props, IState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      counterValue: props.initialValue,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      counterValue: prevState.counterValue + 1,
    }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      counterValue: prevState.counterValue - 1,
    }));
  };

  render() {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement("div", null, "Value: ", this.state.counterValue),
      React.createElement("button", { onClick: this.handleIncrement }, "+"),
      React.createElement("button", { onClick: this.handleDecrement }, "-")
    );
  }
}

export default Counter;
