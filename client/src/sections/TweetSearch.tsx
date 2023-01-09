import "./tweetSearch.css"

import {BiSearch} from  "react-icons/bi"
type  openFormType ={
  setOpenForm : Function
}
const TweetSearch = ( {setOpenForm}:openFormType ) => {
    return ( 
        <div className="tweetSearch">
            <div className="searchField">
                <input 
                  placeholder="search your saved  tweet" 
                type="text"     />
                <div className="searchIcon icon">
                  <BiSearch  size="35"/>
                </div>
            </div>
                <button  onClick={()=> setOpenForm(true)}
                 className="btn">Create New Tweet</button>

        </div>
     );
}
 
export default TweetSearch;