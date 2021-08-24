import "./App.css"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Home from "./pages/Home"
import Cities from "./pages/Cities"
import City from "./pages/City"
import Error404 from "./pages/Error404"
import Fail from "./pages/Fail"
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom"

const App = () => {
    return(
        <BrowserRouter>
          <Switch>
             <Route exact path = "/" component={Home}/>
             <Route path = "/cities" component={Cities}/>
             <Route path = "/city/:id" component ={City}/>
             <Route path = "/signUp" component = {SignUp}/>
             <Route path = "/signIn" component = {SignIn}/>
             <Route path = "/Fail" component ={Fail}/>
             <Route path = "/Error404" component ={Error404}/>
             <Redirect to = "/Error404"/>
         </Switch>
        </BrowserRouter>
    ) 
}

export default App
