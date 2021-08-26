import { useEffect, useState } from "react"
import NavBar from "./Navbar"
import {Link} from "react-router-dom"
import axios from "axios"
import toast from "./Toast"
import { connect } from 'react-redux'
import usersActions from '../redux/actions/usersActions'
import { BsEye, BsEyeSlash } from 'react-icons/bs'

const SignUp = (props) => {
    const [countries, setCountries] = useState([])
    const [newUser, setNewUser] = useState({ firstName: '', lastName: '', email: '', password: '', profilePhoto: '', country: '' })
    const [hidden, setHidden] = useState(true)
    useEffect(() => {
        window.scroll(0,0)
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(response => setCountries(response.data))
            .catch(error => console.log(error))
    }, [])

    const userHandler = (e) =>{
        const value= e.target.value
        const data= e.target.name
        setNewUser({...newUser, [data]: value})
    }

    const sendFormHandler = async () => {
        if (Object.values(newUser).some(value => value === "")) {
            toast('error', 'All fields are required!')
            } else {
               try{
                    let response = await props.signUpUser(newUser)
                    if(response.data.success){
                        toast('success', 'Account created successfully')
                    }else{
                        toast('error', 'This email is already in use')
                    }
               }catch (error){
                props.history.push('/fail')
                return false
               }
        }      
    }
    return(
        <div>
            <NavBar/>
            <div className="signUpBack"style ={{backgroundImage:"url('/assets/signIn.png')" }}>
                <div className="signUpTittle">
                    <h2>Hello Adventurer!</h2>
                    <h4>Create your account by filling the form below.</h4>
                </div>
                <div className="formContainer">
                    <form>
                        <span><input type="text" name="firstName" placeholder="First name" value={newUser.firstName} onChange={userHandler} autoComplete="nope"/></span>
                        <span><input type="text" name="lastName" placeholder="Last name" value={newUser.lastName} onChange={userHandler} autoComplete="nope"/></span>
                        <span><input type="email" name="email" placeholder="Email" value={newUser.email} onChange={userHandler} autoComplete="nope"/></span>
                        <span><input type={hidden ? "password" : "text"} name="password" placeholder="Password" value={newUser.password} onChange={userHandler} autoComplete="nope"/>
                                 <div onClick={() => setHidden(!hidden)} className="eyeIcon">
                                    {hidden ? <BsEyeSlash className="inputIcons" /> : <BsEye className="inputIcons" />}
                                </div> 
                                </span>
                        <span><input type="url" name="profilePhoto" placeholder="Url profile picture" value={newUser.profilePhoto} onChange={userHandler} autoComplete="nope"/></span>
                        <span><select type="text" name="country" placeholder="Choose your country" value={newUser.country} onChange={userHandler}>
                        <option>Choose your country</option>
                        {countries.map(country => <option key={country.name} value={country.name}>{country.name}</option>)}
                        </select>
                        </span>
                    </form>
                    <div className="formButtons">
                        <button onClick={sendFormHandler}>Create account</button>
                        <button>Sign in with Google</button>
                        <p>Already have an account? <Link to = "/signIn">Log in here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    signUpUser: usersActions.signUpUser
}

export default connect(null, mapDispatchToProps)(SignUp)