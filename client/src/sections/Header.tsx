import  './header.css'
import {BiSearch} from  "react-icons/bi"

const Header = () => {
    return ( 
        <div className="header" >      
            <h1 className="headerLogo">Twita<span>Handler</span></h1>
            <div className='rightHeader'></div>
             <div className= "animatedSearchBarContainer">
                 <input type="text" placeholder='Search for tweet here'/>
             <BiSearch size="25"/>
             </div>
        </div>
     );
}
 
export default Header;