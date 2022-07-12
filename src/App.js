import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import React from 'react';

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
