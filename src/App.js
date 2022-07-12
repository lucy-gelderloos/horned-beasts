// import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import React from 'react';

// Your App component should render a Header, Footer and Main component, each of which is defined in their own files.

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
