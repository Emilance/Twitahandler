
import "./createTweet.css"
import {RxCross2} from "react-icons/rx"
import {BsImage}  from "react-icons/bs"
import {BiTime}  from "react-icons/bi"
import {FiSend}   from "react-icons/fi"
import { createRef, useState } from "react"
import axios from "axios"


type  openFormType ={
    setOpenForm : Function
}
type formInputType={
     text: string,
     image: null | FileList | string
}

const CreateTweet = ({setOpenForm}: openFormType) => {
   const  [inputData, setInputData] = useState<formInputType>({text : "", image: null } )
   const formref = createRef<HTMLFormElement>()
   
   const {text, image } = inputData
   const submitForm =async (e:React.ChangeEvent<HTMLFormElement> ) => {
    e.preventDefault()

    const file = image as FileList
    const  data = new FormData();
    data.append("text", text);
    data.append("image", file[0] ) ;
    

   

    fetch('http://localhost:5000/tweet', {
    method: 'POST',
    body: data,
    mode: 'cors',
    credentials: 'include'
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    console.log(response.json());
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

   }
    return ( 
        <div className="createTweet">
            <div className="inputContainer">
                    <div onClick={() => setOpenForm(false)} className="cancelIcon">
                        <RxCross2 size="24"/>
                    </div>
                  <form ref={formref} encType="multipart/form-data" onSubmit={submitForm}>
                    <p>
                       <textarea className="textarea"
                       name="text" 
                       value={inputData.text}
                       onChange={ e => setInputData({ ...inputData, text: e.target.value})}

                       ></textarea>
                    </p>
                    <input type="file" name="image"
                      onChange={ e => setInputData({ ...inputData, image: e.target.files})}
                    />
                    <input type="submit"/>
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