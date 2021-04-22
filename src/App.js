import React from 'react'
import './styles/main.scss'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Home from './components/Home'
import SingleArtworkPage from './components/SingleArtwork'


function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/artwork" component={SingleArtworkPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
