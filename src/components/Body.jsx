import react from "react";
import ChatTopbar from "./topbar/ChatTopbar";
import Chatbox from "./chatbox/Chatbox";
import Footer from "./footer/Footer.jsx";

const Body = () => {
  return (
    <div className='body-container'>
      <ChatTopbar />
      <Chatbox />
      <Footer />
    </div>
  )
}

export default Body;
