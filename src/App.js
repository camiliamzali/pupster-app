import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './components/About'
import Discover from './components/Discover'
import Search from './components/Search'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <div>
        < Navbar />
        <Route exact path="/" component={About} />
        <Route exact path="/discover" component={Discover} />
        <Route path="/search" component={Search} />
      </div>
    </Router>
  );
}

export default App;
