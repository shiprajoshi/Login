import React, { useState } from 'react';
import {connect} from 'react-redux';
import { addFile } from './../actions/index';
import { withRouter } from 'react-router-dom';
import AppState from '../fakeAuth';

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
    }
    handleClickLogout=()=>{
      this.props.history.push('/')
    }
    render() {
      return (
        <div>
          {
           this.props.isAuthenticated ? 
            <div>
               <label>Choose file</label>
        <br/>
          <input type="file"onChange={this.handleonChange}/>
          <button onClick={this.handleClickLogout}>Logout!!</button>
            </div>
             :<div><p>You are not logged in.</p></div>
          }
       
    </div>
      );
    }
  }

const mapStateToProps=(state)=>{
  return{
    isAuthenticated: state.fetchReducers.isAuthenticated
  }
}

const mapDispatchToProps=(dispatch)=>{
return{
    fileName: (fn)=>dispatch(addFile(fn))
}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Test));
