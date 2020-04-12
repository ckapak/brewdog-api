import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ReactDOM from 'react-dom'
import './stylesheets/main.scss'
import 'bulma'

import Home from './components/Home'
import Navbar from './components/Navbar'
import Beers from './components/Beers'
import Random from './components/Random'
import Show from './components/Show'

const App = () => (
  <BrowserRouter>
    <main>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/beers" component={Beers} />
        <Route path="/random" component={Random} />
        <Route path="/beer/:id" component={Show} />
      </Switch>
    </main>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)