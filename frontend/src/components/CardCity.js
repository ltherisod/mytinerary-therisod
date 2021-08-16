import {Link} from "react-router-dom"

const CardCity = (props) => {
    const{src, _id, name, description}=props.city
    return(
            <Link className="cardLink text-decoration-none text-dark col-12 col-md-6 my-3" to={`/city/${_id}`}>
                <div className= "cardBody d-flex align-self-center">
                        <div  className ="cardimg" style={{backgroundImage:`url('${src}')`}}>
                            <div className=" citydescription">
                                <h4>{name}</h4>
                                <p>{description}</p> 
                            </div>
                        </div> 
                </div>                
             </Link>
    )
}

export default CardCity