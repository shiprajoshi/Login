import React, {useState} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import fakeAuth from '../fakeAuth';
import { signin } from '../actions/index';
class LoginPage extends React.Component{

    constructor(props){
        super(props);
        this.state={
            userName1: "",
            password1: ""
        }
    }    

    onInputChange=(type,e)=>{
            this.setState({
                [type]: e.target.value
            })
    }
    handleOnSubmit=(e)=>{
        e.preventDefault();
        const {userName, password} = this.props.authData;
        const {userName1, password1} = this.state;
        if(userName=== userName1 && password=== password1){
            this.props.authenticateUser(true);
            console.log('this.props', this.props)
            this.props.history.replace('/test')
        }
        else{
          //  this.props.authenticateUser(false)
            alert('Login Failed!!')
        }
    }
    render(){


        return(
            <div>
                <form onSubmit={(e)=>this.handleOnSubmit(e)}>
                    <div>
                      <label>User Name</label>
                      <input type="text" onChange={(e)=>this.onInputChange("userName1", e)}/>
                    </div>
                    <div>
                      <label>Password</label>
                      <input type="password"onChange={(e)=>this.onInputChange("password1", e)}/>
                    </div>
                  
                    <div>
                      <button type="submit">Submit</button>
                 </div>
                </form>
                
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        authData : state.fetchReducers.authenticationData
    }

}

const mapDispatchToProps=(dispatch)=>{
    return{
        authenticateUser: (flag, history)=> dispatch(signin(flag, history)),

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));