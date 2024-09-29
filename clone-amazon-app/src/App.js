import React from 'react'
import "./App.css";
import Header from './Components/Header'
import Home from './Components/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">

    <Router>
    <Switch>
      <Route path='/checkout'>
      <Header />
      <Checkout />

      </Route>
    </Switch>
    
    </Router>
    <Header />
    <Home />
    </div>
  );
}

export default App;
