import {useState, useEffect} from 'react';

const CustomFetchHook = (url) => {
    
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
        fetch(url)
        .then(res =>{
            if(!res.ok){
                throw Error('Could not fetch the data from resource');
            }
           return res.json();
       }).then(data =>{
           setBlogs(data);
           setIsPending(false);
       }).catch(err=>{
           setIsPending(false);
            setError(err.message);
       })
        },300);
       
    },[url]);

    return {blogs, isPending, error}
}
 
export default CustomFetchHook;