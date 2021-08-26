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
import usersActions from "./redux/actions/usersActions"
import { connect } from "react-redux"
import {useEffect} from "react"

const App = (props) => {
    useEffect(()=>{
        if(localStorage.getItem('token')){
            props.signInLS(
                localStorage.getItem('firstName'),
                localStorage.getItem('profilePhoto'),
                localStorage.getItem('token')
            )
        }
    },[])
    return(
        <BrowserRouter>
          <Switch>
             <Route exact path = "/" component={Home}/>
             <Route path = "/cities" component={Cities}/>
             <Route path = "/city/:id" component ={City}/>
             {!props.token && (<Route path = "/signUp" component = {SignUp}/>)}
             {!props.token &&  (<Route path = "/signIn" component = {SignIn}/>)}
             <Route path = "/Fail" component ={Fail}/>
             <Route path = "/Error404" component ={Error404}/>
             <Redirect to = "/"/>
         </Switch>
        </BrowserRouter>
    ) 
}
const mapStateToProps = (state) => {
    return{
        token: state.users.token
    }
}
const mapDispatchToProps = {
    signInLS: usersActions.signInLS
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
