import {useState} from 'react';
import {useHistory} from 'react-router-dom';

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Wahed');
    const [isPending, setIsPending] = useState(false);

    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const post = { title, body, author };
        //console.log(post);

        setIsPending(true);
        fetch('http://localhost:8000/blogs',{
            method: "POST",
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(post)
        }).then(()=>{
            setIsPending(false);
            history.push('/');
        })
    }
    return ( 
        <div className="create">
            <h2>Add a New Post</h2>
            <form onSubmit={handleSubmit}>
                <label>Post title:</label>
                <input
                type="text"
                required
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                />

                <label>Post body:</label>
                <textarea
                required
                value={body}
                onChange={(e)=> setBody(e.target.value)}
                ></textarea>

                <label>Post author:</label>
                <select
                value={author}
                onChange={(e)=> setAuthor(e.target.value)}
                >
                <option value="Wahed">Wahed</option>
                <option value="Farhad">Farhad</option>
                </select>
                {!isPending && <button>Post</button>}
                {isPending && <button disabled>Adding post...</button>}
            </form>
        </div>
     );
}
 
export default Create;