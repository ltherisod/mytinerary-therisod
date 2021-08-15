import {Link} from "react-router-dom"

const CardCity = (props) => {
    const{src, _id, name, description}=props.city
    return(
            <Link className="cardLink text-decoration-none text-dark" to={`/city/${_id}`}>
                <div className= "col-12 col-md-6 my-3 cardBody">
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