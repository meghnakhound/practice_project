import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      name: "",
      userImage: ""
    };
  }

  checkUserID = e => {
    const userId = e.target.value;
    this.setState({ userId: parseFloat(userId) });
  };

  fetchUserDetail = () => {
    const { userId } = this.state;
    if (userId) {
      fetch(`https://reqres.in/api/users/${userId}`)
        .then(res => res.json())
        .then(result => {
          if (result.data) {
            this.setState({
              name: `${result.data.first_name} ${result.data.last_name}`,
              userImage: result.data.avatar
            });
          } else {
            this.setState({ userId: "", name: "", userImage: "" });
          }
        });
    } else {
      alert("Please enter a userId");
    }
  };

  render() {
    return (
      <div className="main-card-container">
        <input
          type="number"
          className="txtfield-userid"
          onChange={this.checkUserID}
          value={this.state.userId}
        />
        <button
          text="Get Details"
          className="btn-get-details"
          onClick={this.fetchUserDetail}
        />
        <div className="card">
          <div className="image-container">
            <img src={this.state.userImage} alt={this.state.name} />
          </div>
          <div className="details-container">
            <span>
              ID: {this.state.userImage && <span>{this.state.userId}</span>}
            </span>
            <span>Name: {this.state.name}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
