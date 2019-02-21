import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

//Components et al
import NavBar from './NavBar';
import Footer from './Footer';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Home}/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;