import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Redirect from './Redirect';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state={
      text: ""
    }
  }
  submitURL(){
    axios.post(`/new/${this.state.text}`,{text:this.state.text}).
    then((res,err) =>{
      console.log()
      window.location.href = `/${res.data.shortUrl}`;
    });
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="icon">
          <i className="fa fa-link" style={{fontSize:'10em',color:'white'}} aria-hidden="true"></i>
          <h3 className="url">URL Shortener Microservice</h3>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6" style={{marginTop:"2%"}}>
              <input value={this.state.text} onChange={(e)=> this.setState({text: e.target.value})} type="text" className="form-control" id="usr"/>
            </div>
          </div>
          <div className="row">
            <button style={{margin: "1% auto"}} className="btn btn-warning" onClick={this.submitURL.bind(this)}>Short URL</button>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
