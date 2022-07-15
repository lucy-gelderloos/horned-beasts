import Col from 'react-bootstrap/Col'
import React from "react";
import "./HornedBeast.css";
import heart from "../img/heart.png";

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {clicks: 0};
        this.handleVoteClick = this.handleVoteClick.bind(this);
        this.title = props.title;
        this.image_url = props.image_url;
        this.description = props.description;
        this.key = props._id;
        this.keyword = props.keyword;
        this.horns = props.horns;
    }

    handleVoteClick() {
        this.setState({
            clicks: this.state.clicks + 1
        });
    }

    handleModalClick = () => {
        this.props.handleModalClick(this);
    }

    render() {
    return (
        <Col className="animal">
            <h2>{this.title}</h2>  
            <div className="imageAndClicks">
                <img onClick={this.handleModalClick} src={this.image_url} alt={this.description} title={this.title} />
                <div className="clicks" onClick={this.handleVoteClick}>
                    <img src={heart} alt="heart" />
                    <p>{this.state.clicks}</p>
                </div>
            </div>
            <p>{this.description}</p>
        </Col>
        );
  }
}

export default HornedBeast;
