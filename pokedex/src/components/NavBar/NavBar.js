import {React, useState} from 'react'
import { kanto,Johto } from "../../api"

const NavBar = ({handleRegion}) => {


    const handleChange = () => {
      const newState = kanto;
      

      handleRegion(newState);
      
    };

    const handleChange2 = () => {
        const newState = Johto;
        
  
        handleRegion(newState);
        
      };

  




  return (
    <div>
        <button onClick={handleChange}>Kanto</button>
        <button onClick={handleChange2}>Johto</button>
    </div>
  )
}

export default NavBar