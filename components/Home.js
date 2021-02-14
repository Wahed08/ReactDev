import Bloglist from './Bloglist';
import CustomFetchHook from './CustomFetchHook';

const Home = () => {

   const {blogs, isPending, error} = CustomFetchHook('http://localhost:8000/blogs')

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading..</div>}
            {blogs && <Bloglist blogs={blogs} title="All Post"/>  }      
        </div>
     );
}
 
export default Home;

 
