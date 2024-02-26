/* YOUTUBE GITHUB REPO :: https://www.youtube.com/watch?v=IkMND33x0qQ&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=27 
https://github.com/iamshaunjp/Complete-React-Tutorial*/ 

import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () =>{
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [IsPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog= {title, body, author}
        setIsPending(true);

        /*POST request to add data on db.json*/
        fetch('http://localhost:3000/blogs', {
            method: 'POST',
            headers: { "Content-Type":"application/json" },
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('POST successful!');
            setIsPending(false);
            //history.go(-1); //For going back 1 step
            history.push('/');

        })
    }

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title :: </label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e)=>{setTitle(e.target.value)}}
                />
                <label>Blog Body :: </label>
                <textarea 
                    required
                    value={body}
                    onChange={(e)=>{setBody(e.target.value)}}
                ></textarea>
                <label>Author :: </label>
                <select
                    value={author}
                    onChange={(e)=>{setAuthor(e.target.value)}}
                >
                    <option value="mario">Mario</option>
                    <option value="luigi">Luigi</option>
                    <option value="alexa">Alexa</option>
                </select>
                { !IsPending && <button>Add Blog</button> }
                { IsPending && <button disabled>Adding Blog...</button> }
            </form>
        </div>
    );
}

export default Create;