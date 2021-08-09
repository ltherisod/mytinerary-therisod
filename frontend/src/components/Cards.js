const Cards = () => {
    return (
        <div>
            <div className="titles">
                <h2>ESCAPE WITH US</h2>
                {/* <h3><span>Escape</span> with us</h3> */}
                <div className="textDeco"></div>
            </div>
            <div className="container-fluid">
            <div className="row cardContainer">
               <div className="col-10 col-md-3 my-4 card">
                   <div className="cardphoto"style={{backgroundImage: `url('./assets/logocard1.png')`}}></div>
                   <div className="cardText">
                    <p>No matter where do you want to go, we can help  you there.</p>
                </div>
               </div>
               <div className="col-10 col-md-3 my-4 card">
                   <div className="cardphoto" style={{backgroundImage: `url('./assets/logocard2.png')`}}></div>
                   <div className="cardText">
                    <p>We maximize your vacation experience just in the right way.</p>
                   </div>
               </div>
               <div className="col-10 col-md-3 my-4 card"> 
                   <div className="cardphoto" style={{backgroundImage: `url('./assets/logocard3.png')`}}></div>
                   <div className="cardText">
                    <p>Every Mountain top is within reach if you just keep climbing.</p>
                   </div>
               </div>
               </div>
               
            </div>
        </div>
    )
}

export default Cards