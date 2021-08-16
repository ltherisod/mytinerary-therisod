import axios from "axios"
import { useEffect, useState } from "react"
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import Header from "../components/Header"
import CardCity from "../components/CardCity"

const Cities = (props) => {
    const [citiesData, setCitiesData] = useState([])
    const [searchResult, setSearchResult] = useState([])
    const [search, setsearch]=useState("")
    const [loader, setLoader] = useState (true)

    useEffect (() => {
        window.scroll(0,0)
        axios
        .get("http://localhost:4000/api/citiesData")
        .then ((res) => {
            if(res.data.success){
                setCitiesData(res.data.answer)
                
            }else{
                console.log(res.data.answer)
            }
        })
        .catch((error) => {
            props.history.push('/fail')
            console.log(error)
        })

        .finally(() => setLoader(false))
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        setSearchResult(citiesData)
    },[citiesData])

    const changeHandler = (e) =>{
        setsearch(e.target.value)
        cityFilter(e.target.value)
    }
    
    const cityFilter = (searchedcity) =>{
        let action= citiesData.filter((cityShown) =>
          cityShown.name.toLowerCase().startsWith(searchedcity.trim().toLowerCase()))
          setSearchResult(action)
    }

    const noResult = searchResult.length === 0 
    ? <div className="oopsDiv"><p>Oops! No results for your search.</p><p> Try another city!</p> <img alt="oops" src="/assets/info.gif"/></div> 
    : searchResult.map((cityData, index) =>{return(<CardCity city={cityData} key={index} />)})
    if(loader){
        return(
            <img alt="loader" src="/assets/Cities/loader.gif"/> 
)}
    return(
        <div>
             <NavBar/>
             <Header/>
             <div className="inputContainer">
                <h2>FIND YOUR NEW ADVENTURE!</h2>
                <input type= "text" className="inputFilter" placeholder="Search your destination..." value={search} onChange= {changeHandler}/>
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

export default Cities