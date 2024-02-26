import { useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const [name, setName] = useState('Susnata');
    const [age, setAge] = useState(28);

    const clickHandler = () => {
        setName('Palash');
        setAge(29);
    }

    const {data:blogs, IsPending, error} = useFetch('http://localhost:3000/blogs');

    return(
        <div className="home">
            <h2>HomePage</h2>
            <p>{ name } is { age } years old!</p>
            <button onClick={clickHandler}>Click Me!</button>
            {error && <div>Error found :: {error}</div>}
            { IsPending && <div>Loading...</div>}
            { blogs && <BlogList data={blogs} title = "All Blogs!!!"/>}
        </div>
    )
}

export default Home;