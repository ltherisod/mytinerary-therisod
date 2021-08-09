import React from "react"
import NavBar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import CitiesCarousel from "../components/CitiesCarousel"
import Cards from "../components/Cards"
import TravelTips from "../components/TravelTips"
import Footer from "../components/Footer"


export default class Home extends React.Component {
    render (){
        return (
            <>
                <NavBar/>
                <HeroSection />
                <Cards />
                <CitiesCarousel/>
                <TravelTips/>
                <Footer />
            </>

        
        )
    }
}