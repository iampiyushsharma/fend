import React from 'react';
import './IconCard.css'; // Import your CSS file for styling
import { FaCamera } from "react-icons/fa";
import { CiMicrophoneOn } from "react-icons/ci";
import { FaRegShareSquare } from "react-icons/fa";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5"
import { IoMdExit } from "react-icons/io";

const IconCard = () => {
  return (
    <div className="card">
      
      <div  className="card-icon">
      <FaCamera />
      <p>cam</p>
      </div>
      <div  className="card-icon">
      <CiMicrophoneOn />
      <p>cam</p>
      </div>
      <div  className="card-icon">
      <FaRegShareSquare />
      <p>cam</p>
      </div>
      <div  className="card-icon">
      <IoChatbubbleEllipsesSharp />
      <p>cam</p>
      </div>
      <div  className="card-icon">
      <IoMdExit />
      <p>cam</p>
      </div>
    </div>
  );
}

export default IconCard;
