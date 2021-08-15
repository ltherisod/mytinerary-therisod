import { Link } from "react-router-dom"

const Fail = () => {
    return(

        <div className = "errordiv">
            <div className="notFound">
                <img src="./assets/info4.gif" alt="lost"/>
            </div>
            <div className="errorText">
                <h1>Oops!</h1>
                <h3>Something went wrong</h3>
                <p>Come back Home!</p>
                <Link  to = "/">
                    <button className="errorButton">Go back</button>
                </Link>
            </div>
        </div>
    )
}

export default Fail