import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

// Set the countdown date
const countdownDate = new Date('2023-12-31T23:59:59').getTime();

// Update the countdown every day
const countdownInterval = setInterval(() => {
  // Get the current time
  const now = new Date().getTime();

  // Calculate the difference between now and the countdown date
  const difference = countdownDate - now;

  // Calculate the days left
  const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));

  // Update the countdown text and loader
  document.getElementById('countdown-days').innerHTML = daysLeft;

  // Stop the countdown when the date is reached
  if (difference < 0) {
    clearInterval(countdownInterval);
    document.getElementById('countdown-days').innerHTML = 'EXPIRED';
  }
}, 86400000);



    return(
        <div className="home-block" >
           
            <div className="block" ></div>
                <img className="slider-img" src="https://elysium-athletic.netlify.app/detailed_alex.png" />
                <Link to="/Home" className="home-path" >ELYSIUM</Link>
                <Link to="/Shop" className="shop-path" >SHOP</Link>
                <Link to="/Programs" className="programs-path" >PROGRAMS</Link>
                <Link to="/About" className="about-path" >ABOUT</Link>

                <p className="march-drop" >MARCH DROP</p>
                
                <div class="loader">
                <div class="loader-inner">
                <div class="loader-text" id="countdown-days">12 days</div>
                </div>
                </div>



            
         </div>
    )
}

export default Home