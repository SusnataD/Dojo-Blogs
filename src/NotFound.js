import { Link } from 'react-router-dom';
const NotFound = () => {
    return(
        <div className="not-found">
            <h2 className="not-found-header">SORRY!!</h2>
            <p className="not-found-body">The requested page is not found!</p>
            <Link to='/'>Back to HOME</Link>
        </div>
    )
} 

export default NotFound;