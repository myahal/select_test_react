import React from 'react'
import {Router, Route, hashHistory} from 'react-router'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {reducer} from './Reducer'
import ContainerFormBase from './ContainerFormBase'

export default function AppComponent() {
  let store = createStore(reducer)

  return(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={ContainerFormBase} />
      </Router>
    </Provider>
  )
}
