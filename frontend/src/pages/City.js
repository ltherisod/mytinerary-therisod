import axios from "axios"
import { useEffect, useState } from "react"
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"

const City = (props) =>{
    const [cityData, setCityData] = useState({})
    useEffect (() => {
        window.scroll(0,0)
        axios
        .get(`http://localhost:4000/api/citiesData/${data}`)
        .then ((res) =>{
            if(res.data.success){
                setCityData(res.data.answer)
            }else{
                console.log(res.data.answer)
            }
        })
        .catch((error) => {
            props.history.push('/Fail')
            console.log(error)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
 
 const data = props.match.params.id
    return(
        <>
            <NavBar/>
            <header className="cityHeader" style={{backgroundImage:`url('${cityData.background}')`}}>
            <h1><span> Welcome to {cityData.name} </span></h1>
            </header>
            <main>
                <div className="titles">
                     <h2>Join us in this wonderfull adventure</h2>
                     <div className="textDeco"></div>
                </div>
               
                <div className="comingSoon">
                    <h3>Itineraries coming soon</h3>
                    <img alt="icon" src="/assets/info3.gif"/>
                   <Link to="/cities"><button className="back">Back to Cities</button> </Link> 
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default City