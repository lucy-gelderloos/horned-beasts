import Header from './Components/Header.js';
import Main from './Components/Main.js';
import Footer from './Components/Footer.js';
import React from 'react';
import './App.css';
import Images from './data.json'
import SelectedBeast from './Components/SelectedBeast.js';

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
