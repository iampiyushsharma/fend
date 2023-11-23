import logo from './logo.svg';
import './App.css';
import { FaBell } from "react-icons/fa";
import { IoMdStopwatch } from "react-icons/io";
import { FaCalendarCheck } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { IoIosStats } from "react-icons/io";
import { MdOutlineSegment } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FcOnlineSupport } from "react-icons/fc";
import { IoCall } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { IoLogoApple } from "react-icons/io";
import Card from './component/Card';
function App() {
  return (  
    <div className="App">
      <div className="main-container">
      
      <div className="sidebar">
        <IoLogoApple color='black' />
        <MdOutlineSegment color='black'/>
        <FaBell color='black' />
        <IoMdStopwatch color='black' />
        <FaCalendarCheck color='black' />
        <FaEye  color='black'/>
        <IoMdPeople color='black' />
        <IoIosStats color='black' />
        <CgProfile color='black' />
      </div>

      {/* Container */}
      <div className="container">
        {/* Top bar in the right container */}
        <div className="top-bar">
          {/* Left section with heading and back button */}
          <div className="left-section">
            <IoIosArrowBack />
            <h2>Basic Mathematics 101</h2>
          </div>

          {/* Right section with icons */}
          <div className="right-section">
            <div className="icon-container">
            <IoCall />
              <span>Call Teacher</span>
            </div>
            <div className="icon-container">
            <FcOnlineSupport />
              <span>Support</span>
            </div>
          </div>
          </div>

        {/* Navigation bar in the right container */}
        <div className="navigation-bar">
          <a href="#" className="nav-link active">Classroom</a>
          <a href="#" className="nav-link">Whiteboard</a>
          <a href="#" className="nav-link">Videos</a>
          <a href="#" className="nav-link">Slideshow</a>
          <a href="#" className="nav-link">Document</a>
          <a href="#" className="nav-link">Doc.Cam</a>
        </div>

        {/* Main content in the right container */}
        <div className="content-container">
          {/* Left section with cards */}
          <div className="left-section">
            {/* Add your cards or other content here */}
            <Card
              name="John Doe"
              photoUrl="data:image/jpeg;base64,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" 
              // Replace with the actual URL of the photo
            />
            <Card
              name="John Doe"
              photoUrl="data:image/jpeg;base64,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" 
              // Replace with the actual URL of the photo
            />
            <div className="card">Card 1</div>
            <div className="card">Card 2</div>
            {/* Add more cards as needed */}
          </div>

          {/* Right section with YouTube video */}
          <div className="right-section">
            {/* You can embed a YouTube video here */}
            {/* Adjust the width and height as needed */}
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/your_video_id"
              title="YouTube Video"
              allowFullScreen
              borderRadius="10px"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
