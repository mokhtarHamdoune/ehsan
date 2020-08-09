import React from 'react';
import Header from './components/header/header.component';
import NavBar from './components/navBar/navBar.component';
import Footer from './components/footer/footer.component';
import Home from './components/home/home.component';
import Donate from './components/donate/donate.component';
import {Switch,Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar />
      <Switch >
        <Route path="/donate">
          <Donate />
        </Route>
        <Route path="/contact-us" />
        <Route path="/about-us"  />

        <Route path="/"> 
            <Home />
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
