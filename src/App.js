// import logo from './logo.svg';
import './App.css';
import Header from './header.js';
import Main from './main.js';
import Footer from './footer.js';
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
