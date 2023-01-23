import { useEffect, useState } from "react";
import {FiSend}   from "react-icons/fi"
import UserInfo from "../sections/InfoContainer";

import "./searchUserInfo.css"

const SearchUserInfo = () => {
      const [userInfo, setUserInfo] = useState({})
      useEffect(()=> {

        fetch('http://localhost:5000/api/user/eminencex3', {
              method: 'GET', // or 'POST', 'PUT', 'DELETE'
              headers: {
                  'Content-Type': 'application/json'
              },
              mode: 'cors',
              
          })
          .then(response => response.json())
          .then(data => {
              // do something with the data
              console.log(data)
          })
          .catch(error => {
              console.error('Error:', error);
          });
      }, [])
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
                 <p>LOCATION: <span>NIGERIA</span></p>
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