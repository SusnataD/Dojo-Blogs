import { useHistory, useParams } from "react-router-dom";
import useFetch from './useFetch';

const BlogDetails = () =>{
    const { id } = useParams();
    const { data, error, IsPending} = useFetch('http://localhost:3000/blogs/' + id);
    const history = useHistory();
    const DeleteBlog = () => {
        fetch('http://localhost:3000/blogs/'+data.id, {
        method: 'DELETE'
        }).then(()=>{
            console.log('Blog Deleted::'+data.id);
            history.push('/');
        })
    }
    return (
        <div className="blog-details">
            {IsPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && (
                <article>
                    <h2>{data.title}</h2>
                    <p className="blog-author">Written By :: {data.author}</p>
                    <small className="blog-body">{data.body}</small>
                    <div className="del-button"><button onClick={DeleteBlog}>Delete Blog</button></div>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;