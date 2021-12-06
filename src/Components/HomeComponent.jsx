import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Routes ,Navigate} from 'react-router-dom';
import GlobalVisualComponent from './GlobalVisualComponent';
import HeaderComponent from './HeaderComponent';
import SearchComponent from './SearchComponent';

import '../App.css';
 
class HomeComponent extends Component {
  render() {
    return (
     
    <Router>
    <div>
    <HeaderComponent/>  
   
    </div>
    <Routes>
    <Route exact path="/home" element={<SearchComponent/>}/>
    <Route exact path="/global" element={<GlobalVisualComponent/>}/>
    
    </Routes>
    </Router>
   
   );
  }
}

 
export default HomeComponent;