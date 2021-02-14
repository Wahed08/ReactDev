import { useParams, useHistory} from "react-router-dom";
import CustomFetchHook from './CustomFetchHook';

const PostDetails = () => {

    const {id} = useParams();
    const {blogs, isPending, error} = CustomFetchHook('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleDelete = () =>{
        fetch('http://localhost:8000/blogs/'+id,{
            method: "DELETE"
        }).then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="post-details">
            {isPending && <div>Loading..</div>}
            {error && <div>{error}</div>}
            {blogs && (
                <article>
                    <h2>{blogs.title}</h2>
                    <p>Written By {blogs.author}</p>
                    <div>{blogs.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default PostDetails;