import React, { useState } from 'react';
import ChatGptSidebar from './chatgptSideBar';
import ChatGptTextInput from './chatgptTextField';


const Chatgpt = () => {



  return (
    <div>
        <div>
            {/* <ChatGptSidebar value={inputValue}/> */}
            <ChatGptTextInput />
        </div>
    </div>
  )
}

export default Chatgpt;