import React, { useState } from 'react';
import styles from './tabstyle.css'; 

const Tab = ({ scrollToAbout }) => {
    const [toggle, setToggle] = useState(1);


    return (
      <>
      <div className='tab'>
      <ul className='tablist'>
        <li className={toggle === 1 ? 'tabitema active' : 'tabitem'} onClick={()=>updateToggle(1)}>Home</li>
        <li className={toggle === 2 ? 'tabitema active' : 'tabitem'} onClick={()=>updateToggle(2)}>About</li>
        <li className={toggle === 3 ? 'tabitema active' : 'tabitem'} onClick={()=>updateToggle(3)}>Project</li>
        <li className={toggle === 4 ? 'tabitema active' : 'tabitem'} onClick={()=>updateToggle(4)}>Contact</li>
      </ul>
      </div>
      </>
    );
};

export default Tab;
