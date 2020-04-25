import React, { Component } from "react";
import ReactCountryFlag from "react-country-flag";
import { DeleteOutlined } from "@ant-design/icons";

import { Popconfirm } from "antd";
import "./UserCard.css";

class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="UserCard-outside">
        <div
          style={{ backgroundImage: `url(${this.props.user.avatar})` }}
          className="UserCard-avatar"
        ></div>
        <div className="UserCard-content">
          <div className="UserCard-top">
            <div className="UserCard-name">
              {this.props.user.country && (
                <ReactCountryFlag countryCode={this.props.user.country} />
              )}
              <a href={`https://osu.ppy.sh/users/${this.props.user.userid}`}>
                {this.props.user.username}
              </a>
              {this.props.canDelete && (
                <Popconfirm
                  title={`Are you sure you want to remove ${this.props.user.username}?`}
                  onConfirm={() => this.props.onDelete(this.props.user.username)}
                  okText="Yes"
                  cancelText="No"
                >
                  <DeleteOutlined className="UserCard-delete" />
                </Popconfirm>
              )}
            </div>
            {!this.props.hideRank && (
              <div className="UserCard-rank">
                <span>{`#${this.props.user.rank}`}</span>
              </div>
            )}
          </div>
          {this.props.extra && <div className="UserCard-bot">{this.props.extra}</div>}
        </div>
      </div>
    );
  }
}

export default UserCard;