import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="notFound">
            <h2>404 Page not Found</h2>
            <p>The Page you are looking for cannot be found</p> 
            <Link to="/">Back to homepage</Link>
        </div>
    );
}
 
export default NotFound;