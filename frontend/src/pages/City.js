import { useEffect} from "react"
import { connect } from 'react-redux'
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import Itinerary from "../components/Itinerary"
import { Link } from "react-router-dom"
import citiesActions from "../redux/actions/citiesActions"
import itinerariesActions from "../redux/actions/itinerariesActions"

const City = (props) =>{

    // const [itineraries, setItineraries] = useState([])
    // const [loader, setLoader] = useState (true)
   
    useEffect (() => {
        window.scroll(0,0)
        if(!props.cities.length){
            props.history.push('/cities')
            return false
        }
        props.getOneCity(props.match.params.id)
        props.getItineraries()
        
        // axios
        // .get(`http://localhost:4000/api/itineraries/`)
        // .then ((res) =>{
        //     if(res.data.success){
        //         setItineraries(res.data.answer)
        //     }else{
        //         props.history.push('/fail')
        //     }
        // })
        // .catch((error) => {
        //     props.history.push('/fail')
        //     console.log(error)
        // })
        // .finally(() => setLoader(false))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
 const itineraryCards = props.itineraries.map((itineraryData, index) => <Itinerary data={itineraryData} key={index} />)

//  if(loader){
//     return(
//         <div className="loaderdiv d-flex justify-content-center align-content-center">
//                 <img alt="loader"  className="loaderGif" src="/assets/sky-2-unscreen.gif"/> 
//         </div>
// )}
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
                    {/* <h3>Itineraries coming soon</h3>
                    <img alt="icon" src="/assets/info3.gif"/> */}
                   <Link to="/cities"><button className="back">Back to Cities</button> </Link> 
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
        itineraries: state.itineraries.allItineraries
    }
}

const mapDispatchToProps = {
getOneCity:citiesActions.getOneCity,
getItineraries:itinerariesActions.getItineraries
}

export default connect(mapStateToProps, mapDispatchToProps)(City)