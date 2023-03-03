import React from "react";
import { Link } from "react-router-dom";







const About = () => {
    return(
<>
        <div>
            <Link className="nav-1" to="/About" >ABOUT</Link>
            <Link className="nav-2" to="/Home" >ELYSIUM</Link>
        </div>

        <p  className="alex">ALEX</p>
        <img src="https://elysium-athletic.netlify.app/image%201.png" className="alex-picture" ></img>
        <p className="about-alex" >ABOUT ALEX:</p>
        <p  className="about-alex-paragraph" >Alex Eubank is a fitness YouTuber and TikToker known for his inspiring and informative content about health and fitness. With over 400,000 followers on TikTok and more than 100,000 subscribers on YouTube, he has become a trusted source of fitness advice for many people. Alex's content is known for its authenticity and relatability, as he shares his own fitness journey and struggles with his audience. He also provides practical tips and workouts that can be done from home, making fitness more accessible for everyone. His dedication to living a healthy lifestyle and helping others do the same has earned him a loyal following and the admiration of many fitness enthusiasts.</p>

</>
    )
}

export default About