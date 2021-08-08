import { Link } from "react-router-dom"

const Error404 = () => {
    return(

        <div className = "errordiv">
            <div className="notFound">
                <img src="./assets/instructions.gif" alt="lost"/>
            </div>
            <div className="errorText">
                <h1>Error 404!</h1>
                <h3>Looks like you're lost</h3>
                <p>the page you are looking for is not available!</p>
                <Link  to = "/">
                    <button className="errorButton">Go back</button>
                </Link>
            </div>
        </div>
    )
}

export default Error404