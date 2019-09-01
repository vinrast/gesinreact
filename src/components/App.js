import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ExercisesList from '../pages/ExercisesList'
import ExerciseNew from '../pages/ExerciseNew'
import NotFound from '../pages/NotFound'

const App = ()=>(
  <BrowserRouter>
    <Switch>
      <Route exact path="/exercise" component={ ExercisesList } />
      <Route exact path="/exercise/new" component={ ExerciseNew } />
      <Route  component={ NotFound } />
    </Switch>
  </BrowserRouter>

)

export default App
