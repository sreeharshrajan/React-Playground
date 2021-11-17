import React, { Component } from "react";

class Pic extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 style={{ textAlign: "center" }}>{this.props.picture.title}</h1>
        <div style={{ overflow: "hidden" }} className="PicStyle">
          <img src={this.props.picture.url} alt="" width="100%"></img>
        </div>
        <p>{this.props.picture.cap}</p>
      </React.Fragment>
    );
  }
}

export default Pic;
