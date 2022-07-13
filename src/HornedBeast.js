import React from "react";
import "./HornedBeast.css"

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {clicks: 0};
        this.handleClick = this.handleClick.bind(this)
        this.title = props.title;
        this.image_url = props.image_url;
        this.description = props.description;
        this._id = props._id;
        this.keyword = props.keyword;
        this.horns = props.horns;
    }

    handleClick() {
        this.setState({
            clicks: this.state.clicks + 1
        });
        console.log(this.state.clicks);
    }
    
    render() {
    return (      
        <div className="animal">
            <h2>{this.title}</h2>  
            <img onClick={this.handleClick} src={this.image_url} alt={this.description} title={this.title} />
            <p>{this.description}</p>
        </div>
        );
  }
}

export default HornedBeast;
