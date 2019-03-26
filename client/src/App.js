import React, { Component } from 'react';
import Header from './view/Header';
import Footer from './view/Footer';
import Dashboard from './view/Dashboard'




class App extends Component {

  render() {
    return (
      <div className="Wrapper">
      <Header />
      <Dashboard />
      <Footer />
      </div>
    );
  }
}


export default App;