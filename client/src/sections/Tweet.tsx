import "./tweet.css"
import { BsTwitter } from "react-icons/bs"
import {BiTime, BiEditAlt}  from "react-icons/bi"


const Tweet = () => {
    return ( 
        <div className="tweet">
            
             <div className="tweetTextBody">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, distinctio officiis accusantium perferendis laboriosam dicta culpa rem eligendi magnam quasi!</p>
             </div>

             <div className="tweetMedia">
                 <img src="/befunded.png" alt="mytweet"/>
             </div>
             <div className="tweetButtonContainer">
                <div className="tweetButton">
                     <BsTwitter color="#1DA1F2" size="25"/>
                </div>
                <div className="tweetButton">
                     <BiEditAlt size="25"/>
                </div>
                <div className="tweetButton">
                    <p>2hr:3min:40sec </p>
                     <BiTime size="25"/>
                </div>
             </div>
        </div>
     );
}
 
export default Tweet;