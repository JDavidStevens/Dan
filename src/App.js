import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Title from "./components/title/title";
import Home from "./components/home/home";
import About from "./components/about/about";
import Music from "./components/music/music";
import Video from "./components/video/video";
import Contact from "./components/contact/contact";

import './App.css';

class App extends Component {
  render() {
  return (
    <div className="App">
      <HashRouter>
        <Title/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/music" component={Music} />
          <Route path="/demo-reel" component={Video} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </HashRouter>

    </div>
  );
  }
}

export default App;


