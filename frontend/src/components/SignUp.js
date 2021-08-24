import { useEffect, useState } from "react"
import NavBar from "./Navbar"
import {Link} from "react-router-dom"
import axios from "axios"
import toast from "./Toast"


const SignUp = () => {
    const [countries, setCountries] = useState([])
    const [newUser, setNewUser] = useState({ firstName: '', lastName: '', email: '', password: '', profilePhoto: '', country: '' })
    // const [hidden, setHidden] = useState(true)
    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(response => setCountries(response.data))
            .catch(error => console.log(error))
    }, [])

    const userHandler = (e) =>{
        const value= e.target.value
        const data= e.target.name
        setNewUser({...newUser, [data]: value})
    }

    const sendFormHandler = () => {
        if (Object.values(newUser).some(value => value === "")) {
            toast('error', 'All fields are required!')
        } else {
            axios.post('http://localhost:4000/api/user/signup', newUser)
            .then(res =>{
                if(!res.data.success){
                    toast('error', 'This email is already in use')
                }else{
                    toast('success', 'Account created successfully')
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
            <div className="signUpBack"style ={{backgroundImage:"url('/assets/signIn.png')" }}>
                <div className="signUpTittle">
                    <h2>Hello Adventurer!</h2>
                    <h4>Create your account by filling the form below.</h4>
                </div>
                <div className="formContainer">
                    <form>
                        <span><input type="text" name="firstName" placeholder="First name" value={newUser.firstName} onChange={userHandler} autoComplete="off"/></span>
                        <span><input type="text" name="lastName" placeholder="Last name" value={newUser.lastName} onChange={userHandler} autoComplete="off"/></span>
                        <span><input type="email" name="email" placeholder="Email" value={newUser.email} onChange={userHandler} autoComplete="off"/></span>
                        <span><input type="password" name="password" placeholder="Password" value={newUser.password} onChange={userHandler} autoComplete="off"/></span>
                        <span><input type="url" name="profilePhoto" placeholder="Profile photo" value={newUser.profilePhoto} onChange={userHandler} autoComplete="off"/></span>
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

export default SignUp