import React, { useState } from 'react';
import linkdinImage from '../Images/linkedin.png';
import githubImage from '../Images/github.png';
import mailImage from '../Images/gmail.png';
import styles from './socialmediaStyle.css'; 

const Link = () => {
   

    return (
      <>
      <div className='links'>
        <a href="https://www.linkedin.com/in/prachi-sharma-01ps/" target="_blank">
        <img alt="Linkedin" height="23" src={linkdinImage}  width="24" />
        </a>
        <a href="mailto:Prachisharma.ps01@gmail.com" target="_blank">
        <img alt="Gmail" height="32" src={mailImage}  width="32" />
        </a>
        <a href="https://github.com/PrachiSharmaPS" target="_blank">
        <img alt="Github" height="25" src={githubImage}  width="25" />
        </a>
      </div>
      </>
    );
};

export default Link;
