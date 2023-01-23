 import './homePage.css'
import  Animatedsvg from "../assets/animatedsvg.svg"
import { Link } from "react-router-dom";

const HomePage = () => {
    return ( 
        <div className="homePage" >
            <h1>What do you want to do with <span>Twitter<span>Handler</span></span> ?</h1>

            <div className='featureButton'>
            <Link to="/savedtweet">
                 Automate and Save Tweet
            </Link>
            </div>
            <div className='featureButton'>
               <Link to="/lookupuser">

                 Look up a User's Info
               </Link>
            </div>
         
            <div className='featureButton'>
               <Link to="/">
                 Twitter Video Downloader
               </Link>
            </div>

            <img src={Animatedsvg} />
        </div>
     );
 }
  
 export default HomePage;