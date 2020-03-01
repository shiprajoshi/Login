// import React from 'react';
// import axios from 'axios';
// import {connect} from 'react-redux';
// import {postPosts,fetchPosts} from './../actions/index';

//  class PostForm extends React.Component{
//     state={
//         title:"",
//         body:""
//     }

// onInputChange=(e)=>{
//     e.preventDefault();
//     this.setState({[e.target.name]: e.target.value})
// }

// handleOnClick=(e)=>{
//     e.preventDefault();
//         const formBody={
//             title: this.state.title,
//             body: this.state.body
//         };
//         let config={
//             'content-type': 'application/json'
//         }
//         this.props.postData(formBody,config);
//         // axios.post('https://jsonplaceholder.typicode.com/posts',formBody, config)
//         // .then(res=> res)
//         // .then(data=> console.log(data.data, 'postdata'))
//         // .catch(err=> console.log(err, 'error'))

// }

// render(){
//     return(
//         <div>
//             <form>
//                 <legend><h2>Add Post</h2></legend>
//                 <label>Title:</label>
//                 <input type="text" onChange={this.onInputChange} name="title"/><br /><br/>
//                 <label>Body:</label>
//                 <textarea rows="5" cols="30" name="body" onChange={this.onInputChange} /><br/>
//                 <button type="submit" onClick={this.handleOnClick}>Add Data</button>
//             </form>

//         </div>
//     )
// }
// }


// const mapDispatchToProps=dispatch=>{
//     return{
//         postData: (formBody,config)=>dispatch(postPosts(formBody,config))
//     }
// }

// // const mapDispatchToProps=(dispatch)=>{
// //         return{
// //             postForm: ()=> {
// //                 dispatch(postPosts())
// //             }
// //         }
// // }

// export default connect(null, mapDispatchToProps)(PostForm)