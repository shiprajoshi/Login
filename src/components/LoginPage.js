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
    handleOnSubmit = (e) => {
        e.preventDefault();
        const {userName, password} = this.props.authData;
        const {userName1, password1} = this.state;

        console.log(this.state, this.props)

        if(userName === userName1 && password === password1){
            this.props.authenticateUser(true);
            console.log('this.props', this.props)
            this.props.history.push('/test')
        }
        else{
          //  this.props.authenticateUser(false)
            alert('Login Failed!!')
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
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

const mapStateToProps=(state, { history })=>{
    return{
        authData : state.fetchReducers.authenticationData,
        history
    }

}

const mapDispatchToProps=(dispatch)=>{
    return{
        authenticateUser: (flag, history)=> dispatch(signin(flag)),

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));