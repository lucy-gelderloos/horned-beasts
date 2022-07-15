import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import HornedBeast from "./HornedBeast.js";
import React from 'react';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.images = props.images;
  }

  render () {

    return (
        <main>
          <Container>
            <Row>
              {this.images.map(el => <HornedBeast image_url={el.image_url} title={el.title} description={el.description} handleModalClick={this.props.handleModalClick} />)}
            </Row>
          </Container>
        </main>
        );
    }
  }

export default Main;
