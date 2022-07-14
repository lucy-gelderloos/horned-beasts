// Import the data.json file into your App component and send that data into the Main component
// Map over the JSON data in your Main component to render each beast
// Send a function into your Main component that allows the user to update state in the App
// Create a SelectedBeast component and include it in your App
// Use the state in the App to render an individual beast in a Modal in the SelectedBeast component using React Bootstrap

// so basically - all beasts need to render on the page, which uses HornedBeast. If I get rid of the click counter, so I'm not tracking the individual state of each image, could I move the image generation up to Main?

// what needs to happen is when the user clicks an image, (1) it adds to the clicks and (2) it sends the key of the clicked image up to Main (or App??) so it can display the modal with that image. 

// SO Main should have a state of modal (default not modal) and if an image is clicked, it should change Main's state to modal and send up the key of the image that was clicked. When anything else is clicked, it should reset Main's state to default.

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React from "react";
import "./HornedBeast.css";
// import heart from "./heart.png";

class SelectedBeast extends React.Component {
  
  // constructor(props) {
  //   super(props);
  //   this.image = props.image;
  // }
  
  render() {
      return (
        <>
          <Modal show={this.props.viewModal} onHide={this.props.closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.imageTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h2>{this.props.imageTitle}</h2>
                <img src={this.props.imageUrl} alt={this.props.imageDesc} title={this.props.imageTitle} />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.props.closeModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }

    // https://www.pluralsight.com/guides/how-to-trigger-modal-for-react-bootstrap

export default SelectedBeast;
