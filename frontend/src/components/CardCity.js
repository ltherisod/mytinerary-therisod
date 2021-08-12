import {Link} from "react-router-dom"

const CardCity = (props) => {
    const{src, id, name, description}=props.city
    return(
            <Link to={`/city/${id}`}>
                <div className= "col-12 col-md-6 my-3 cardBody">
                        <div key= {id} className ="cardimg" style={{backgroundImage:`url('${src}')`}}>
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