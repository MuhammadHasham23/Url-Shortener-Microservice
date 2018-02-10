import React,{Component} from "react";
import {BrowserRouter,Route,Link} from "react-router-dom";
import App from "./App";
import Redirect from "./Redirect";

class Routes extends Component{
  render(){
    return(
      <BrowserRouter>
      <div>
      <Route  exact path="/" component={App}/>
      <Route exact  path="/:url" component={Redirect}/>
      </div>
      </BrowserRouter>
    )
  }
}
export default Routes;
