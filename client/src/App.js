import './App.css';
import './main.css'
import React, { Component } from 'react';
import { Routes ,Route } from "react-router-dom";
import Home from './components/Home';
import Menu from './components/menu';
import Store from './components/store';
import Franchise from './components/franchise';
import Contact from './components/contact';
import Admin from './components/admin';
import MenuBar from './components/main';


class App extends Component {
  render() {
    return (
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/store" element={<Store />} />
      <Route path="/franchise" element={<Franchise />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin" element={<Admin />}/>
      <Route path="/main" element={<MenuBar />}/>
    </Routes>
      )
  }
}

export default App;
