import React from "react";
import myImage from './'


function About() {
    return (
<div>
    <h2 id="about">About Me</h2>
    <Col xs={6} md={4}> <Image src={myImage} rounded /></Col>
      <p id="about-me">
     My name is Taja Grayson and I am from Columbia, SC. I have a Bachelors in Biology from Winthrop University and am currently working as Laboratory scientist.
     2 years in I was ready to change my career, which lead me to taking the full stack web development course.
     I am exicted to polish my skills as a web developer and in the near future become employed as one!
      </p>
</div>
    )
};

export default About;