import React, { Component } from "react";
import { connect } from "react-redux";
import { callAPIAsync } from "../redux/redux";
import "../style/index.css";

class Input extends Component {
  callAPI = () => {
    const keyward = document.getElementById("input").value;
    console.log(keyward);
    if (keyward !== "") this.props.callAPIAsync(keyward);
    document.getElementById("input").value = "";
  };

  render() {
    return (
      <div>
        <div>Please input keyword</div>
        <input id="input" type="text" />
        <button onClick={this.callAPI}>GET</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    callAPIAsync: code => dispatch(callAPIAsync(code))
  };
};
export default connect(null, mapDispatchToProps)(Input);
