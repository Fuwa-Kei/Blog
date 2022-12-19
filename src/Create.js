import { useState } from "react";
import {useHistory} from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Kei');
    
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=> {
            console.log("New Post Added");
            history.push("/");
        });
    }

    return ( 
        <div className="create">
            <h2>Post new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title: </label>
                <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <label>Blog body: </label>
                <textarea required value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
                <label>Written by: </label>
                <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="Kei">Kei</option>
                    <option value="Fuwa">Fuwa</option>
                </select>
                <button type="submit">Post</button>
            </form>
        </div>
    );
}
 
export default Create;