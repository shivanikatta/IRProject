import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Routes ,Navigate} from 'react-router-dom';
import MainComponent from './MainComponent';
import GlobalVisualComponent from './GlobalVisualComponent';
import HeaderComponent from './HeaderComponent';

import '../App.css';
 
class HomeComponent extends Component {
  render() {
    return (
     
    <Router>
    <div>
    <HeaderComponent/>  
    </div>
    <Routes>
    <Route exact path="/home" element={<MainComponent/>}/>
    <Route exact path="/global" element={<GlobalVisualComponent/>}/>
    
    </Routes>
    </Router>
   
   );
  }
}

 
export default HomeComponent;