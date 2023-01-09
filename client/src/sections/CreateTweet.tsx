
import "./createTweet.css"
import {RxCross2} from "react-icons/rx"
import {BsImage}  from "react-icons/bs"
import {BiTime}  from "react-icons/bi"
import {FiSend}   from "react-icons/fi"


type  openFormType ={
    setOpenForm : Function
}

const CreateTweet = ({setOpenForm}: openFormType) => {
    return ( 
        <div className="createTweet">
            <div className="inputContainer">
                    <div onClick={() => setOpenForm(false)} className="cancelIcon">
                        <RxCross2 size="24"/>
                    </div>
                  <form>
                    <p>

                     <span className="textarea" role="textbox" contentEditable></span>
                    </p>
                    <input type="file"   />
                  </form>
                  <hr/>
                  <div className="iconCon">
                    <div className="rightIcon">

                    <div className="formIcon">
                            <BsImage size="25" />
                        </div>
                        <div className="formIcon">
                            <BiTime size="25" />
                        </div>
                    </div>
                    <div className="leftIcon">

                        <div className="formIcon">
                            <FiSend size="25" />
                        </div>
                    </div>
                  </div>
            </div>
        </div>
     );
}
 
export default CreateTweet;