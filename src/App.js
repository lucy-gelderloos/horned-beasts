// import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import React from 'react';
import './App.css';

class App extends React.Component {
  render() {  
    return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
 }
}

export default App;
