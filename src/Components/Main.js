import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import HornedBeast from "./HornedBeast.js";
import React from 'react';

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
    console.log(this.displayArr);
    return this.displayArr;
  }
  }

 handleSelect(event) {
  this.filterImages(event.target.value);
  this.setState({horns: event.target.value});
  console.log(this.state.horns);
}



render () {
  console.log(this.displayArr)
    return (
        <main>
          <Container>
            <Form>
              <Form.Group>
                <Form.Label>Filter by number of horns</Form.Label>
                <Form.Select onChange={this.handleSelect.bind(this)}>      
                  <option value="any">I want to see all of them!</option>
                  <option value="1">One-horned beasts</option>
                  <option value="2">Two-horned beasts</option>
                  <option value="3">Three-horned beasts</option>
                  </Form.Select>
              </Form.Group>
            </Form>
            <Row>
              {this.displayArr.map(el => <HornedBeast key={el._id} image_url={el.image_url} title={el.title} description={el.description} handleModalClick={this.props.handleModalClick} />)}
            </Row>
          </Container>
        </main>
        );
    }
}

export default Main;
