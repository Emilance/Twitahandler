import {FiSend}   from "react-icons/fi"
import UserInfo from "../sections/InfoContainer";

import "./searchUserInfo.css"

const SearchUserInfo = () => {
    return ( 
        <div className=" searchUser">
             {/* <div className="userForm">
                 <h2> Input the User Username here</h2>
                <input type="text"
                 placeholder="e.g @eminencex3"
                />
                <div className="sendButton">
                  <p>Enter</p>
                  <FiSend size="18"/>
                </div> 
             </div>*/}

             <div className="topSection">
              <div className="userInfoCon">
                 <p>USERNAME: <span>EMINENCE</span></p>
                 <p>HANDLE: <span>@EMINENCEX</span></p>
                 <p>BIO: <span>Lorem, ipsum dolor sit amet consectetur adipisic.</span></p>
              </div>
                
              <div className="profilePics">
                <img src="/befunded.png"/>
              </div>
             </div>
             <UserInfo/>
        </div>
     );
}
 
export default SearchUserInfo;