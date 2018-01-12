import React from "react";
import "./PhotoDisplay.css";


const Photo = props => {
	  return (
	    <span className="photoDiv">
	      <img 
	      id={props.id} 
	      className="saucePhoto" 
	      width="250" alt={props.name} 
	      src={props.image} alt={props.alt} 
	      onClick={() => props.pointCounter(props.id)}/>
	    </span>
	  )
};

export default Photo;  