// First off, in Main, you'll want to swap out your .forEach() method to use .map() instead. This is actually better, as .map() returns a new array for you so you don't have to create an empty one to push everything into it.

// Next, per directions:
// Send a function into your Main component that allows the user to update state in the App
// You'll probably want to move your viewModal state and modal() method from inside of Main and place it in App instead.
// Next, in addition to having a method that displays a modal, you'll probably also want one that will close it...
// after that, you'll want to render your SelectedBeast component in App, so you'll probably need to pass some data form App into that component
// Once you get your beasts rendering again, can successfully render a selected beast, update your time estimates and deploy your site via netlify, I can regrade for full credit

// Send a function into your Main component that allows the user to update state in the App
// Create a SelectedBeast component and include it in your App
// Use the state in the App to render an individual beast in a Modal in the SelectedBeast component using React Bootstrap

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import React from 'react';
import './App.css';
import Images from './data.json'
import SelectedBeast from './SelectedBeast.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {modalImgUrl: null, modalImgTitle: null, modalImgDesc: null, viewModal: false};
  }

  handleModalClick = (image) => {
    this.setState({modalImgUrl: image.props.image_url, modalImgTitle: image.props.title, modalImgDesc: image.props.description, viewModal: true});
  }

  closeModal = () => {
    this.setState({viewModal: false});
  }

  render() {
      return (
        <>
        <Header />
        <Main images={Images} handleModalClick={this.handleModalClick} />
        <SelectedBeast imageUrl={this.state.modalImgUrl} imageTitle={this.state.modalImgTitle} imageDesc={this.state.modalImgDesc} closeModal={this.closeModal} viewModal={this.state.viewModal} />
        <Footer />
      </>
      );
    }
}

export default App;
