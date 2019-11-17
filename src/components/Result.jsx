import React, { Component } from "react";
import { connect } from "react-redux";
import "../style/index.css";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifImg: {
        url: "",
        title: "",
        source: ""
      }
    };
  }

  render() {
    const imgURL = this.props.gifImg.url;
    return (
      <div>
        <div>{this.props.gifImg.title}</div>
        {(() => {
          if (imgURL) return <img src={imgURL} alt="gif animation" />;
        })()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    gifImg: state.gifImg
  };
};
export default connect(mapStateToProps)(Input);
