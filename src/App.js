import React from 'react'
import './styles/main.scss'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Home from './components/Home/HomePage'
import SingleArtworkPage from './components/SingleArtwork'
import IndexPage from './components/IndexPage'


function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/artwork" component={SingleArtworkPage} />
        <Route path="/index" component={IndexPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
