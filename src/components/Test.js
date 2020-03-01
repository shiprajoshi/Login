import React, { useState } from 'react';
import {connect} from 'react-redux';
import { addFile } from './../actions/index';
import { withRouter } from 'react-router-dom';
import fakeAuth from '../fakeAuth';
class Test extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        fileName: ''
      };
    }
     handleonChange=(e)=>{
         this.setState({
             fileName : e.target.files[0].name
         })
         this.props.fileName(e.target.files[0].name)
        this.props.history.push('/new')
      //  setFileName(e.target.files[0].name);
       // console.log('evemt!', e.target.files[0].name)
    }
    handleClickLogout=()=>{
      this.props.history.push('/')
    }
    render() {
      console.log('--',   this.props
    )
      return (
        <div>
          {
            this.props.isAuthenticated ? <div>
               <label>Choose file</label>
        <br/>
          <input type="file"onChange={this.handleonChange}/>
          <button onClick={this.handleClickLogout}>Logout!!</button>
            </div>:<div><p>You are not logged in.</p></div>
          }
       
    </div>
      );
    }
  }


// function Test(){

//     const[fileName, setFileName]= useState('');

//     const handleonChange=(e)=>{
//         setFileName(e.target.files[0].name);
//        // console.log('evemt!', e.target.files[0].name)
//     }

//     return(

// <div>
//     <label>Choose file</label>
//     <br/>
//    <input type="file"onChange={handleonChange}/>
// </div>

// );
// }

const mapStateToProps=(state)=>{
  console.log('state', state)
  return{
    isAuthenticated: state.fetchReducers.isAuthenticated
  }
}

const mapDispatchToProps=(dispatch)=>{
   // console.log('---', fileName)
   console.log('hey dispatch', dispatch)
return{
    fileName: (fn)=>dispatch(addFile(fn))
}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Test));
