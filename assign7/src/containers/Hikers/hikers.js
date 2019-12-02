import React, {Component} from "react";
import "./hikers.css";
import appRoutes from "../../shared/appRoutes";
import { Link } from "react-router-dom";
import HikerList from "./hikerList";
import Fade from 'react-reveal/Fade';

class Hikers extends Component {
  state = {
    hiker: HikerList
  };
  render(){
    let { hiker } = this.state;

    let hikerSet = []


    return (

      <div className="Hikecontainer">
        <br />
        <h1 className="BannerText"> THE HIKERS</h1>
          {hiker.map((hike, idx) => {
            return (

            <div id={hike.id} className={hike.style + " goal"}>

              <Fade left>
                <img className="img-hover-zoom" src={hike.photo} alt={hike.name} />
                <div className="text">
                  <h5 className="CharName">{hike.name}</h5>
                  <h6>{hike.dob}</h6>
                  <p>{hike.who}</p>
                </div>
              </Fade>

            </div>
            );
          })}

    </div>
  );
  }
};

export default Hikers;
