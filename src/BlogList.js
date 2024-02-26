/* handleDelete is passed as an props from the Home.js file 
as the Blogs contents has been defined over Home.js file. 
Thus it is good practice to put the handleDelete on Home.js

The Link to on the 16th line contains Tilde. It is used to pass variable inside the to param,
which is later passed on the BlogDetails.js
*/
import { Link } from 'react-router-dom';

const BlogList = ({data, title}) => {
    return(
        <div className="Blog-content">
            <h2>{ title }</h2>
            { data.map( blog => (
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                            <h2 className="blog-title">{blog.title}</h2>
                            <p className="blog-author">Written By :: {blog.author}</p>
                            <p className="blog-body"><small>{blog.body}</small></p>
                        </Link>
                    </div>
            ))}
        </div>
    );
}

export default BlogList;