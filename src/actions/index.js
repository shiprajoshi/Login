import {FETCH_POSTS, POST_POSTS, DELETE_POST, ADD_FILE, SIGN_IN} from './types';
// import axios from 'axios';
// const url="https://jsonplaceholder.typicode.com/posts";
// export function fetchPosts(){
//     console.log('inside fetch posts')
//     return function(dispatch){
//         console.log('inside fetch posts dispatch')
//         axios.get(url)
//         .then(res=> {
//            return res
//         })
//         .then(data=> dispatch({
//             type: FETCH_POSTS,
//             posts: data.data
//         }));
    
//     }
// }


// export function postPosts(formBody, config){
//     return function(dispatch){
//         console.log('hello, iside postPosts', formBody,config)
//         axios.post(url,formBody,config)
//         .then(res=> {
//             console.log(res,'respponseee')
//         return res
//     })
//         .then(data=> dispatch({
//             type: POST_POSTS,
//             postItem: data.data
//         }))

//     }
// }

// export function deletePost(id){
//     return{
//         type: DELETE_POST,
//         id:id
//     }
// }

 export function addFile(fileName){
    return{
        type: ADD_FILE,
        fileName: fileName
    }
 }

 export function signin(isAuthenticated, history){
     if(isAuthenticated){
         console.log('hjfhyfjf')
        // history.push('/test')
     }
     console.log('uo', isAuthenticated)
     return{
         type: SIGN_IN,
         isAuthenticated: isAuthenticated
     }
 }

