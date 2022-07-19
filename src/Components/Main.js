import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import HornedBeast from "./HornedBeast.js";
import React from 'react';
import heart from "../img/heart.png";

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {horns: 'any'};
    this.images = props.images;
    this.displayArr = this.filterImages(this.state.horns);
  }

  filterImages(filterValue) {

    if(filterValue === 'any') {
      this.displayArr = this.images;
      return this.displayArr;
    }

    else {
      this.displayArr = this.images.filter(el => el.horns === parseInt(filterValue));
    return this.displayArr;
  }
  }

 handleSelect(event) {
  this.filterImages(event.target.value);
  this.setState({horns: event.target.value});
  console.log(this.state.horns);
}



render () {
    return (
        <main>
          <Container>
            <Row>
              <Col className="formCol">
                <p>Click the <img src={heart} alt="heart" /> to select your favorites!</p>
                <hr /> 
                <Form>
                <Form.Group>
                  <Form.Label>Filter beasts by number of horns:</Form.Label>
                  <Form.Select onChange={this.handleSelect.bind(this)}>      
                    <option value="any">Show me all of them!</option>
                    <option value="1">One-horned beasts</option>
                    <option value="2">Two-horned beasts</option>
                    <option value="3">Three-horned beasts</option>
                    </Form.Select>
                </Form.Group>
              </Form>
              </Col>
              {this.displayArr.map(el => <HornedBeast key={el._id} image_url={el.image_url} title={el.title} description={el.description} handleModalClick={this.props.handleModalClick} />)}
            </Row>
          </Container>
        </main>
        );
    }
}

export default Main;
