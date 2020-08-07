import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Image from "./components/homepage/Image"
import View from "./components/view/View"

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Image} exact />
      <Route path="/image/:id" component={View} />
    </Switch>
  </BrowserRouter>
)

export default AppRouter
