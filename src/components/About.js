import React from "react";
import myImage from '/Users/tajagrayson/bootcamp/TG-React-Portfolio/src/images/Taja.jpeg';


function About() {
    return (
<div>
    <h2 id="about">About Me</h2>
     <img src={myImage} width="200" height="100" alt="headshot of me"/>
      <p id="about-me">
     My name is Taja Grayson and I am from Columbia, SC. I have a Bachelors in Biology from Winthrop University and am currently working as Laboratory scientist.
     2 years in I was ready to change my career, which lead me to taking the full stack web development course.
     I am exicted to polish my skills as a web developer and in the near future become employed as one!
      </p>
</div>
    )
};

export default About;