
import { useState } from "react";
import CreateTweet from "../sections/CreateTweet";
import Tweet from "../sections/Tweet";
import TweetSearch from "../sections/TweetSearch";
import {AiOutlineSave}  from "react-icons/ai"
import "./savedPostPage.css"

const SavedpostPage = () => {
    const [openForm, setOpenForm] = useState<boolean>(false)
    return ( 
        <div className="savedPostPage">
            <div className="leftSideBar">
                <div className="sideBartext" >
                    <p><AiOutlineSave size="30"/> Number Of Tweet Saved - <span>03</span></p>
                    <p><AiOutlineSave size="30"/> Number Of Tweet Saved - <span>03</span></p>
                    <p><AiOutlineSave size="30"/> Number Of Tweet Saved - <span>03</span></p>
                    <p><AiOutlineSave size="30"/> Number Of Tweet Saved - <span>03</span></p>

                </div>
            </div>
            <div className="pageContent">
            <TweetSearch    setOpenForm={setOpenForm}/>
            <div className="tweetContainer">
                 <Tweet/>
                 <hr/>
                 <Tweet/>
                 <hr/>
                 <Tweet/>
            </div>
         </div>
          {openForm  &&  <CreateTweet  setOpenForm={setOpenForm}/> }
            
        </div>
     );
}
 
export default SavedpostPage;