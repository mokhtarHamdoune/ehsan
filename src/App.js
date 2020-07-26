import React from 'react';
import Header from './components/header/header.component';
import NavBar from './components/navBar/navBar.component';
import Footer from './components/footer/footer.component';
import Content from './components/Content/content.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar />
      <Content />
      <Footer/>
    </div>
  );
}

export default App;
