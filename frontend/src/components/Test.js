// import React, { Component } from 'react'
// import axios from 'axios';

// class Test extends Component 

//     constructor(){
//         super();
//         this.state = {
//             posts:[]
//         };  

//        // console.log(this.state.users);
//     }

//     componentDidMount(){
//         axios.get('http://localhost:5000/post')
//         .then((res)=>{
//             if(res.data.success){
//                 this.setState({
//                     posts: res.data.posts,
//                 });
//                 console.log(this.state.posts);
//             }
//         })

//     }

//     render() {
//         return (
//             <div>
//                 {this.state.posts.map(post=>(
//                     <div>
//                     <p>{post.name}</p>
//                     <p>{post.email}</p>
//                     </div>
//                 ))}
//             </div>
//         )
//     }
// }

// export default Test;
