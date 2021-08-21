import { useEffect, useState } from "react"
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import Header from "../components/Header"
import CardCity from "../components/CardCity"
import {connect} from "react-redux"
import citiesActions from "../redux/actions/citiesActions"

const Cities = (props) => {
    const [loader, setLoader] = useState (true)
    useEffect (() => {
        window.scroll(0,0)
        async function getAllCities(){
            try{
                await   props.getAllCities()
                setLoader(false)
            }catch (error){
                props.history.push('/fail')
                return false
            }
        }
     getAllCities() 
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const changeHandler = (e) =>{
    props.filterCities(e.target.value)
    }
    
    const noResult = props.cities.length === 0 
    ? <div className="oopsDiv"><p>Oops! No results for your search.</p><p> Try another city!</p> <img alt="oops" src="/assets/info.gif"/></div> 
    : props.cities.map((cityData, index) =><CardCity city={cityData} key={index} />)
    if(loader){
            return(
                    <div className="loaderdiv d-flex justify-content-center align-items-center">
                        <img alt="loader"  className="loaderGif" src="/assets/sky-2-unscreen.gif"/> 
                    </div>
            
            )}
    return(
        <div>
             <NavBar/>
             <Header/>
             <div className="inputContainer">
                <h2>FIND YOUR NEW ADVENTURE!</h2>
                {<input type= "text" className="inputFilter" placeholder="Search your destination..."  onChange= {changeHandler}/> }
             </div>
            <div className="container-fluid d-flex justify-content-center align-items-center citiesdiv">
                <div className="row d-flex align-self-center">
                     {noResult} 
                </div>
            </div>
            <Footer/>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        cities: state.cities.searchedCities 
    }
}

const mapDispatchToProps = {
 getAllCities : citiesActions.getCities,
 filterCities: citiesActions.filterCities
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities)