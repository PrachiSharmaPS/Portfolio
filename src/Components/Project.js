import React, { useState } from 'react';
import styles from './projectData.css'; 
import Card from './card';

const Project = () => {

    return (
      <>
      <div className='project'>
        <h3 className='keyProject'>Key Project</h3>
        <div className='projectList'> 
   <Card/>
   </div>
   </div>
      </>
    );
};

export default Project;
