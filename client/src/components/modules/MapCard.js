import React, { Component } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { Link } from "@reach/router";

import { Card } from "antd";
import "./MapCard.css";

class MapCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleDownload = () => {
    window.open(`https://osu.ppy.sh/b/${this.props.mapId}`);
  };

  render() {
    return (
      <Card
        title={`${this.props.mod}${this.props.index}`}
        bordered={true}
        cover={<img src={this.props.image} onClick={this.handleDownload} />}
        extra={<DeleteOutlined onClick={() => this.props.handleDelete(this.props.mapId)} />}
        className="MapCard-card"
      >
        <p>{`${this.props.artist} - ${this.props.title} [${this.props.diff}]`}</p>
        <p>{`Mapset by ${this.props.creator}`}</p>
        <p>{`Star Rating: ${this.props.sr}, Length: ${this.props.length}`}</p>
        <p>{`BPM: ${this.props.bpm}, OD: ${this.props.od}, HP: ${this.props.hp}`}</p>
      </Card>
    );
  }
}

export default MapCard;