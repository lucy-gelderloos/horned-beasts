
// Send a function into your Main component that allows the user to update state in the App
// Create a SelectedBeast component and include it in your App
// Use the state in the App to render an individual beast in a Modal in the SelectedBeast component using React Bootstrap

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import HornedBeast from "./HornedBeast.js";
import React from 'react';
import SelectedBeast from './SelectedBeast.js';
// import Modal from 'react-bootstrap/Modal'

class Main extends React.Component {

    constructor(props) {
      super(props);
      this.images = props.images;
      // this.handleOpenClick = this.handleOpenClick.bind(this);
      // this.handleCloseClick = this.handleCloseClick.bind(this);
      this.state = {viewModal: false}
      this.displayModal = this.modal;
    }
    
    // handleOpenClick () {
    //   this.setState({viewModal: true})
    // }

    // handleCloseClick () {
    //   this.setState({viewModal: false})
    // }
    
    modal = (image) => {    
      let modalObject;
      this.Images.forEach((el) => {
        if(image === el._id) {
          modalObject = el;
        }
        this.setState({viewModal: true});
      })
      return <SelectedBeast image_url={modalObject.image_url} title={modalObject.title} description={modalObject.description} />;
      // need to pass in key of clicked image, then find that in Images, then call SelectedBeast with the image data as props and have it build a modal that displays because Main's state has also changed from notModal to Modal 
    }

    imageCols = () => {
      let imagesArr = this.images;
      let displayArr = [];
      imagesArr.forEach((element) => {
      displayArr.push(<HornedBeast image_url={element.image_url} title={element.title} description={element.description}/>);
      })
    }

    render () {
      this.imageCols();

    return (
        <main>
          {/* {this.displayModal} */}
          <Container>
            <Row>
              {this.displayArr}
            </Row>
          </Container>
        </main>
        );
    }
  }

export default Main;
