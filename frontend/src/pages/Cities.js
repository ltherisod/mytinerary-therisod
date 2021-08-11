import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import Header from "../components/Header"
import CardCity from "../components/CardCity"

const Cities = () => {
    return(
        
        <div>
             <NavBar/>
             <Header/>
             <div className="inputContainer">
                <h2>Find your new adventure!</h2>
             <input type= "text" className="inputFilter" placeholder="Search your destination..."/>
             </div>
             
             {/* <div className="citiesdiv ">
                <h3> Sorry we are still working in this section </h3>
                <img src="/assets/info3.gif" alt="info"/>
            </div>    */}
           
         <CardCity/>
            
        
            <Footer/>
        </div>
    )
}

export default Cities