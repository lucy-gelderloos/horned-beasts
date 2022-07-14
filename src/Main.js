
// Send a function into your Main component that allows the user to update state in the App
// Create a SelectedBeast component and include it in your App
// Use the state in the App to render an individual beast in a Modal in the SelectedBeast component using React Bootstrap

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import HornedBeast from "./HornedBeast.js";
import React from 'react';

class Main extends React.Component {

    imageCols = () => {
      let imagesArr = this.props.images;
      let displayArr = [];
      imagesArr.forEach((el) => {
      displayArr.push(<HornedBeast key={el._id} image_url={el.image_url} title={el.title} description={el.description} handleModalClick={this.props.handleModalClick} />);
      })
    }

    render () {
      this.imageCols();

    return (
        <main>
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
