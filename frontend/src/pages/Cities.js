import axios from "axios"
import { useEffect, useState } from "react"
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import Header from "../components/Header"
import CardCity from "../components/CardCity"

const Cities = () => {
    const [citiesData, setCitiesData] = useState([])
    const [searchResult, setSearchResult] = useState([])

    const cityFilter = (searchedcity) =>{
        let action=  citiesData.filter((cityShown) =>
          cityShown.name.toLowerCase().startsWith(searchedcity.trim().toLowerCase()))
          setSearchResult(action)
 
    }

    useEffect (() => {
        axios
        .get("http://localhost:4000/api/citiesData")
        .then ((res) => setCitiesData(res.data.answer))
    }, [])

    useEffect(() => {
        setSearchResult(citiesData)
    },[citiesData])
    
    const [search, setsearch]=useState("")
    const changeHandler = (e) =>{
        setsearch(e.target.value)
        cityFilter(e.target.value)
    }

    return(
        <div>
             <NavBar/>
             <Header/>
             <div className="inputContainer">
                <h2>Find your new adventure!</h2>
                <input type= "text" className="inputFilter" placeholder="Search your destination..." value={search} onChange= {changeHandler}/>
             </div>
            <div className="container-fluid citiesdiv">
                <div className="row">
                     {searchResult.map((cityData, index) =>{return(<CardCity city={cityData} key={index} />)})} 
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Cities