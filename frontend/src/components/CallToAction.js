// import React from 'react';
// import {
//   Card, CardImg, CardText, CardDeck, CardBody, Row
// } from 'reactstrap';

// const CallToAction = (props) => {
//   return (
//       <Row>
//             <CardDeck>
//                 <Card>
//                 <CardImg top width="100%" src="/assets/logocard1.png" alt="Card image cap" />
//                 <CardBody>
//                     <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
//                 </CardBody>
//                 </Card>
//                 <Card>
//                 <CardImg top width="100%" src="/assets/logocard2.png" alt="Card image cap" />
//                 <CardBody>
//                     <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
//                 </CardBody>
//                 </Card>
//                 <Card>
//                     <CardImg top width="100%" src="/assets/logocard3.png" alt="Card image cap" />
//                     <CardBody>
//                         <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
//                     </CardBody>
//              </Card>
//         </CardDeck>
//       </Row>
    
//   );
// };

// export default CallToAction;



const CallToAction = () => {
    return (
        <div>
            <div className="titles">
                <h2>ESCAPE WITH US</h2>
                {/* <h3><span>Escape</span> with us</h3> */}
                <div className="textDeco"></div>
            </div>
            <div className="container-fluid">
            <div className="row cardContainer">
               <div className="col-12 col-md-3 my-4 card">
                   <div className="cardphoto"style={{backgroundImage: `url('./assets/logocard1.png')`}}></div>
                   <div className="cardText">
                    <p>No matter where do you want to go, we can help  you there.</p>
                </div>
               </div>
               <div className="col-12 col-md-3 my-4 card">
                   <div className="cardphoto" style={{backgroundImage: `url('./assets/logocard2.png')`}}></div>
                   <div className="cardText">
                    <p>We maximize your vacation experience just in the right way.</p>
                   </div>
               </div>
               <div className="col-12 col-md-3 my-4 card"> 
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

export default CallToAction

    // <div class="row row-cols-1 row-cols-md-3 g-4">
    //     <div class="col">
    //         <div class="card">
    //             <img src="..." class="card-img-top" alt="...">
    //             <div class="card-body">
    //                 <h5 class="card-title">Card title</h5>
    //                 <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    //             </div>
    //         </div>
    //     </div>
    //     <div class="col">
    //         <div class="card">
    //             <img src="..." class="card-img-top" alt="...">
    //             <div class="card-body">
    //                 <h5 class="card-title">Card title</h5>
    //                 <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    //             </div>
    //         </div>
    //     </div>
    // <div class="col">
    //     <div class="card">
    //     <img src="..." class="card-img-top" alt="...">
    //     <div class="card-body">
    //         <h5 class="card-title">Card title</h5>
    //         <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
    //     </div>
    //     </div>
    // </div>
    // <div class="col">
    //     <div class="card">
    //     <img src="..." class="card-img-top" alt="...">
    //     <div class="card-body">
    //         <h5 class="card-title">Card title</h5>
    //         <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    //     </div>
    //     </div>
    // </div>
    // </div>