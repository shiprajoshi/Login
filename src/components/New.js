import React from 'react';
import {connect} from 'react-redux';


class NewPage extends React.Component{
    constructor(props) {
        super(props);
      }
     //  handleonChange=(e)=>{
    //        this.setState({
    //            fileName : e.target.files[0].name
    //        })
    //        this.props.fileName(e.target.files[0].name)
    //        history.push('/new')
    //     //  setFileName(e.target.files[0].name);
    //      // console.log('evemt!', e.target.files[0].name)
    //   }
      render() {
        return (
          <div>
              New Route {this.props.file}
      </div>
        );
      }
}

const mapStateToProps=(state)=>{
  console.log('state!!!', state)
   return{
    file: state.fetchReducers.fileName,
   }

    }
    
    // const mapDispatchToProps=(dispatch)=>{
    //    // console.log('---', fileName)
    //    console.log('hey dispatch', dispatch)
    // return{
    //     fileName: (fn)=>dispatch(addFile(fn))
    // }


export default connect(mapStateToProps, null)(NewPage);