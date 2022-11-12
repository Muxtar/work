import { useState, useReducer } from "react";

function Chat(){
    let [message, setMessage] = useState('')
    function messages(e){
        e.target.style.height = '45px'
        e.target.style.height = (e.target.scrollHeight)+"px";

        setMessage(e.target.value)
    }
    return(
        <div className="chat">
            <div className="messages"></div>
            <div className="input-chat">
                <form>
                    <textarea type="text" value={message} placeholder="Message" onChange={messages}/>
                    <i class="fa fa-paper-plane" aria-hidden="true"></i>
                </form>
            </div>
        </div> 
    )
}


export default Chat;