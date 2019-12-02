import React from "react";
import "./timeline.css";
import appRoutes from "../../shared/appRoutes";
import { Link } from "react-router-dom";
import timelineData from './timelineData';
import Fade from 'react-reveal/Fade';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

const Timeline = () =>
    timelineData.length > 0 && (
        <div className="timeline-container">
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}

        </div>

    );

    const TimelineItem = ({ data }) => (

        <div className="timeline-item">
            <div className="timeline-item-content">
              <Fade left>
                <time>{data.date}</time>
                <p>{data.text}</p>
                  </Fade>
                <span className="circle" />
            </div>

        </div>

      );





export default Timeline;
