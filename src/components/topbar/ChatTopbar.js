import React from "react";
import PPic from "./components/ProfilePic";
import Username from "./components/UserName";
import OptsMain from "./components/options/OptionsMain";
import SearchMain from "./components/searchtab/SearchMain";

const ChatTopbar = () =>{
    
    
    
    return (
        <div className="contact-header">
            <div className='contact-segment'>  
            <PPic />
            <Username />
            </div>
            <div className='body-tools'>
            <SearchMain />
            <OptsMain />
            </div>
        </div>
    );
}

export default ChatTopbar;
