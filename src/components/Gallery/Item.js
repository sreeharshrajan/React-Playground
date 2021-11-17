import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <div style={{ overflow: "hidden" }} className="itemStyle">
        <img
          style={{
            borderRadius: "15px",
            maxHeight: "350px",
            objectFit: "cover",
          }}
          src={this.props.picture.url}
          alt=""
          width="100%"
        ></img>
      </div>
    );
  }
}

export default Item;
