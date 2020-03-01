// import React from 'react';
// import {connect} from 'react-redux';
// import {fetchPosts, deletePost} from './../actions/index';
// import fetchReducers from '../reducers/fetchReducers';
// import MyPost from './MyPost'
// let newPost="";

//  class Posts extends React.Component{
//      state={
//        postLimit:10
//      };
// componentDidMount(){
//     // const url="https://jsonplaceholder.typicode.com/posts";
//     // axios.get(url)
//     // .then(res=> res)
//     // .then(data=> this.setState({posts: data.data}));
//     this.props.fetchPosts();

// }

// // static getDerivedStateFromProps(nextProps, currentState){
// //     console.log(nextProps, 'next prpos')
// //     console.log(currentState, 'currnet')
// //     if(nextProps.postItem){
// //         console.log(nextProps.postItem,'nextpropssssssssssssssss')
// //      return newPost=(
// //                         <tr>
// //                            {nextProps.postItem!==null?<td><input type="checkbox"/></td>: null} 
// //                             <td><h3>{nextProps.postItem.title}</h3>
// //                         <p>{nextProps.postItem.body}</p></td>
// //                         </tr>
// //                         )
        
// //     }
// // }
// onDelete=(post)=>{
//     this.props.deletePost(post.id);
//     console.log(post);

// }

// render(){
//     console.log(this.props.posts, 'postssss')

// //    const postItem=  this.props.posts!==undefined?this.props.posts.slice(0, this.state.postLimit).map((post,index)=>(
// //             <React.Fragment>
// //             <tr key={post.id}>
// //                 <td><input type="checkbox"/></td>
// //                 <td><h3>{post.title}</h3>
// //                 <p>{post.body}</p> 
// //                 </td>
// //                 <td><button onClick={()=>this.props.deletePosts(post.id)}>delete</button></td>
// //             </tr>
// //             </React.Fragment>
// //     )): <div>No Data!!</div>


// const postItem= this.props.posts!==undefined?this.props.posts.slice(0,this.state.postLimit).map((post,index)=>{
//     return(
//         <React.Fragment>
//             <tr key={post.id}>
//             <td><input type="checkbox"/></td>
//             <td><h3>{post.title}</h3>
//             <p>{post.body}</p> 
//             </td>
//             <td><button onClick={()=>this.props.deletePosts(post.id)}>delete</button></td>
//             </tr>
//         </React.Fragment>
        
//     )
// }):null
    
//     return(
//         <React.Fragment>
//            <h1>Posts</h1>
//            <table>
//                <tbody>
//                    <MyPost postDetails={this.props.postItem} delete={this.props.deletePosts}/>
//                    {postItem}
//                </tbody>
//            </table>
//            <p onClick={()=>this.setState({postLimit:this.state.postLimit+10})}>load 10 more posts.....</p>
//         </React.Fragment>

//     )
// }
// }

// const mapStateToProps=(state,ownProps)=>{
//     console.log(ownProps, 'map state to props')
//     return{
//         posts: state.fetchReducers.items,
//         postItem: state.fetchReducers.item

//     }
    
// }

// const mapDispatchToProps=(dispatch,ownProps)=>{
//     console.log(ownProps, 'map dispatch')

//     return{
//         deletePosts: (id)=>dispatch(deletePost(id)),
//         fetchPosts:()=> dispatch(fetchPosts())
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Posts);