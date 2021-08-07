import React from "react"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
// import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import HeroSection from "../components/HeroSection"
import CitiesCarousel from "../components/CitiesCarousel"
import Main from "../components/Main"
import Footer from "../components/Footer"


export default class Home extends React.Component {
    render (){
        return (
            <>
                <Navbar/>
                <Header />
                <HeroSection />
                <CitiesCarousel/>
                <Main />
                <Footer />
            </>

        
        )
    }
}