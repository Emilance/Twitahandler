 import './homePage.css'
import  Animatedsvg from "../assets/animatedsvg.svg"

const HomePage = () => {
    return ( 
        <div className="homePage" >
            <h1>What do you want to do with <span>Twitter<span>Handler</span></span> ?</h1>

            <div className='featureButton'>
                 Automate and Save Tweet
            </div>
            <div className='featureButton'>
                 Look up a User's Info
            </div>
         
            <div className='featureButton'>
                 Twitter Video Downloader
            </div>

            <img src={Animatedsvg} />
        </div>
     );
 }
  
 export default HomePage;