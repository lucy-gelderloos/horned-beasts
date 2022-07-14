
// Send a function into your Main component that allows the user to update state in the App
// Create a SelectedBeast component and include it in your App
// Use the state in the App to render an individual beast in a Modal in the SelectedBeast component using React Bootstrap

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import React from 'react';
import './App.css';
import Images from './data.json'

class App extends React.Component {

  render() {
      return (
        <>
        <Header />
        <Main images={Images} />
        <Footer />
      </>
      );
    }
}

export default App;
