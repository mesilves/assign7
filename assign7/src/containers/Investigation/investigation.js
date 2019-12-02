import React,{Component} from "react";
import "./investigation.css";
import appRoutes from "../../shared/appRoutes";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import InvestigationContent from "./investigationContent";

class Investigation extends Component {
  state = {
    section: InvestigationContent
  };
  render(){
    let { section } = this.state;


    return(
      <div>
      <h1>The Investigation</h1>
      {section.map((sec, idx) => {
        return (

        <div id={sec.id} className={sec.style + " goal"}>
        <div className="textContainer">

            <Fade left>
              <h5 className="CharName">{sec.header}</h5>
              <p>{sec.text}</p>
            </ Fade>

        </div>
        </div>
        );
      })}
      </div>
    );
  }
}
export default Investigation;
