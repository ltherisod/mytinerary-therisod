import NavBar from "../components/Navbar"
import {Link} from "react-router-dom"
const SignUp = () => {
    return(
        <div>
            <NavBar/>
            <div className="SignInBack"style ={{backgroundImage:"url('/assets/signIn.png')" }}>
                <div className="signInTittle">
                    <h2>Hello Adventurer!</h2>
                    <h4>Create your account by filling the form below.</h4>
                </div>
                <div className="formContainer">
                    <form>
                        <span><input type="text" name="firstName" placeholder="First name"/></span>
                        <span><input type="text" name="lastName" placeholder="Last name"/></span>
                        <span><input type="text" name="email" placeholder="Email"/></span>
                        <span><input type="text" name="lastName" placeholder="Last name"/></span>
                        <span><input type="text" name="password" placeholder="Password"/></span>
                        <span><input type="text" name="profilePhoto" placeholder="Profile photo"/></span>
                        <span><input type="text" name="country" placeholder="Country"/></span>
                    </form>
                    <div className="formButtons">
                        <button>Create account</button>
                        <button>Sign in with Google</button>
                        <p>Already have an account? <Link>Log in here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp