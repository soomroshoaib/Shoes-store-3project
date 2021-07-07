import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import Home from './Home'
import About from './About'
import Contact from './Contact'
import Product from "./Product"
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
 import Navba from './Navba'



function Have() {
  return (
    <div>
    <BrowserRouter>
    <Router>
    <Navba />
    
    <Switch>
        <Route path="/Home/:id" component={Home} />
        <Route exact path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Product" component={Product} />
    </Switch>
    </Router>
    </BrowserRouter>
    </div>
  )
}

export default Have
