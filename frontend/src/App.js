import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "./App.css"
import Home from "./pages/Home"
import Cities from "./pages/Cities"
import {BrowserRouter as Router, Switch,Route, BrowserRouter} from "react-router-dom"

const App = () => {
    return(
        <BrowserRouter>
          <Switch>
             <Route exact path = "/" component={Home}/>
             <Route path = "/cities" component={Cities}/>
         </Switch>
        </BrowserRouter>
    ) 
}

export default App
