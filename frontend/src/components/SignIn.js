import NavBar from "./Navbar"
import {Link} from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import toast from "./Toast"
import { BsEye, BsEyeSlash } from 'react-icons/bs'
const SignIn = () => {
    const [logInUser, setLogInUser] = useState({ email: '', password: '' })
    const [hidden, setHidden] = useState(true)
    const logUserHandler = (e) =>{
        const value= e.target.value
        const data= e.target.name
        setLogInUser({...logInUser, [data]: value})
    }

    const logInHandler = () => {
        if (logInUser.email === '' || logInUser.password === '') {
            toast('error', 'All the fields are required!')
        } else {
            axios.post('http://localhost:4000/api/user/signin', logInUser)
            .then(res =>{
                if(!res.data.success){
                    toast('error', 'Wrong email or password! Try again')
                }else{
                    toast('success', 'Welcome adventurer!')
                }
            })
            .catch((error) => {
                toast('error', 'Oops!Something went wrong!')
                console.log(error)
            })
        }       
    }
    return(
        <div>
            <NavBar/>
            <div className="signInBack"style ={{backgroundImage:"url('/assets/LogIn.png')" }}>
                <div className="signInTittle">
                    <h2>Welcome back!</h2>
                    <h4>Log in adventurer</h4>
                    <h4>Connect with Mytinerary's community.</h4>
                </div>
                <div className="formContainerSignIn">
                    <form className="signInForm">
                        <span><input type="email" name="email" placeholder="Email" value={logInUser.email} onChange={logUserHandler} autocomplete="nope"/></span>
                        <span><input type={hidden ? "password" : "text"} name="password" placeholder="Password" value={logInUser.password} onChange={logUserHandler} autocomplete="nope"/>
                         <div onClick={() => setHidden(!hidden)} className="eyeIcon">
                            {hidden ? <BsEyeSlash className="inputIcons" /> : <BsEye className="inputIcons"/>}
                        </div>
                        </span>
                    </form>
                    <div className="formButtons">
                        <button onClick={logInHandler}>Log in</button>
                        <button>Log in with Google</button>
                        <p>Don't you have an account yet? <Link to="/signUp">Sign up here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn