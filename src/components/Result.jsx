import React, { Component } from "react";
import { connect } from "react-redux";
import { callAPIAsync } from "../redux/redux";
import "../style/index.css";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      convert: {
        description: "",
        dislike_count: "",
        like_count: "",
        site: "YouTube",
        streams: [],
        tags: [],
        thumbnail: "",
        title: "",
        upload_date: "",
        uploader: "",
        uploader_url: "",
        url: "",
        view_count: ""
      }
    };
  }

  render() {
    return (
      <div>
        <p>Result</p>
        <div>{this.props.description}</div>
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
