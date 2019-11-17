import React, { Component } from "react";
import { connect } from "react-redux";
import { getBkImgAsync } from "../redux/redux";
import Input from "./Input.jsx";
import Result from "./Result.jsx";
import "../style/index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bkImg: ""
    };
  }

  componentDidMount() {
    this.props.getBkImgAsync();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="contents">
            <Input />
            <Result />
          </div>
        </header>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBkImgAsync: () => dispatch(getBkImgAsync)
  };
};
export default connect(null, mapDispatchToProps)(App);
