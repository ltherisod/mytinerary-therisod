import { useEffect, useState} from "react"
import { connect } from 'react-redux'
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import Itinerary from "../components/Itinerary"
import { Link } from "react-router-dom"
import citiesActions from "../redux/actions/citiesActions"
import itinerariesActions from "../redux/actions/itinerariesActions"

const City = (props) =>{
     const [loader, setLoader] = useState (true)
    useEffect (() => {
        window.scroll(0,0)
        if(!props.cities.length){
            props.history.push('/cities')
            return false //return anticipado para dejar de evaluar 
        }
        async function getItinerariesCity (){
            try{
                await   props.getItinerariesPerCity(props.match.params.id)
                await   props.getOneCity(props.match.params.id)
                setLoader(false)
            }catch (error){
                props.history.push('/fail')
                return false
            }
        }
        getItinerariesCity()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
 const itineraryCards =props.itineraries.length === 0 
    ? <div className="comingSoon"> <div className="noItineraries" style={{backgroundImage:`url('/assets/backNo.jpg')`}}><div><h3>Oh no! We don't have any itineraries yet!</h3></div></div></div> 
    : props.itineraries.map((itineraryData) =><Itinerary data={itineraryData} key={itineraryData._id}/>)

 if(loader){
    return(
        <div className="loaderdiv d-flex justify-content-center align-content-center">
                <img alt="loader"  className="loaderGif" src="/assets/sky-2-unscreen.gif"/> 
        </div>
)}
    return(
        <>
            <NavBar/>
            <header className="cityHeader" style={{backgroundImage:`url('${props.city.background}')`}}>
            <h1><span> Welcome to {props.city.name} </span></h1>
            </header> 
            <main>
                <div className="titles">
                     <h2>Join us in this wonderfull adventure</h2>
                     <div className="textDeco"></div>
                </div>
               
                <div className= "itinerariesBox">
                    {itineraryCards}
                </div>
               
                <div className="comingSoon">
                <Link to="/cities"><button className="back">Back to Cities</button></Link> 
                </div>
               
            </main>
            <Footer/>
        </>
    )
}
const mapStateToProps = state => {
    return{
        city: state.cities.newCity,
        cities: state.cities.allCities,
        itineraries: state.itineraries.itinerariesPerCity
    }
}

const mapDispatchToProps = {
getOneCity:citiesActions.getOneCity,
getItinerariesPerCity:itinerariesActions.getItinerariesPerCity
}

export default connect(mapStateToProps, mapDispatchToProps)(City)
