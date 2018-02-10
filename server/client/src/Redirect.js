import React,{Component} from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Redirect extends Component{
  render(){
    return(
      <div className="center">
    <h1>Your short URL is</h1>
    <h2>{`http://localhost:5000${this.props.location.pathname}`}</h2>
    </div>
    )
  }
}
export default Redirect;
