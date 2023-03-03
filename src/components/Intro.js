import React from "react";
import introvid from '../assets/introvid.mp4'
import { useNavigate } from "react-router-dom";

const Intro = () => {
    const navigate = useNavigate();

    const handleVideoEnd = () => {
        navigate("/Home");
    };

    return (
        <div className="video-holder">
            <video   className="video" src={introvid} autoPlay muted onEnded={handleVideoEnd}>
            </video>
        </div>
    );
};

export default Intro;