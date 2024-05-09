import React from "react";
import styles from "./body.css";
import hand from '../Images/Hand.png';
import About from '../Components/About';

function Body() {
  return (
    <div className="intro">
      <p className="myParagraph">
        Hey! I am <span className="mySpan">Prachi Sharma</span>
      </p>
      <div className="para">
        As a web developer, I create smooth and enjoyable website experiences for users. I use modern tools like React.js for the visible parts of the site and Node.js for the behind-the-scenes work. I'm skilled in a variety of technologies to make it all happen.
      </div>
       <img src={hand} alt="CodeImage"/> 
     <About/>
     
    </div>
  );
}
export default Body;
