import React from "react";

function Resume() {
    return(
        <div>
            <h2>Resume</h2>
            <p id="resume-download">Here is my <a href="https://docs.google.com/document/d/1_VHQHnDJ7sGsoMshVrBxPCqpOUBMqz-Q/edit ">Resume</a></p>
            <h2>Front-End Proficiencies</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <h2>Back-End Proficiencies</h2>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
            </ul>
        </div>
    )
};

export default Resume;