import React from "react";
import "./HomePage.css";
import appRoutes from "../../shared/appRoutes";
import { Link } from "react-router-dom";

const homePage = () => {


  return (
    <div className="Home">
      <div className="Banner">
        <div className="BannerTextContainer">
          <div className="BannerText">D Y A T L O V  P A S S</div>
        </div>
      </div>
      <br />

      <div className="container">
        <p className="IntroText">
The Dyatlov Pass incident was an event where nine people died in the northern Ural Mountains between 1 and 2 February 1959, in uncertain circumstances. The experienced trekking group, who were all from the Ural Polytechnical Institute, had established a camp on the slopes of Kholat Syakhl, in an area now named in honor of the group's leader, Igor Dyatlov. During the night, something caused them to tear their way out of their tents and flee the campsite, all while inadequately dressed for the heavy snowfall and sub-zero temperatures.
        </p>
  <br />
        <Link to={appRoutes.hikers} className="link">Begin the Journey</Link>


      </div>
    </div>
  );
};

export default homePage;
