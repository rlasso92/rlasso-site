import React from "react"
import { render } from "react-dom"
import { BrowserRouter as Router } from "react-router"
import Page404 from "./pages/404"

import Home from "./pages/Home"

const App = () => {
  return (
    <Router basepath="/">
      <Home path="/home" />
      <Page404 path="/404" />
    </Router>
  )
}

render(<App />, document.getElementById("App"))
