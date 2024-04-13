import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ChatGptSidebar.css'; 

const ChatGptTextInput = () => {

  const [userInput, setUserInput] = useState("");
  const [conversation, setConversation] = useState([]);
  // const [apiResponse, setApiResponse] = useState([]);

  // useEffect(() => {
  //   axios.get('https://dummyjson.com/products').then((response)=>{
  //   console.log("response", response);
  //   setApiResponse(response.data.products);
  //   });
  // },[])
    
  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleUserMessage = () => {
    
      if (userInput.trim() === "") return;

      setConversation([ ...conversation,
        { type: "user", text: userInput.trim() },
        { type: "bot", text: "" },
      ]);
      setUserInput("");
  };

  // const handleUserMessage = () => {
  //   try {
  //     if (userInput.trim() === "") return;

  //     axios.post('https://dummyjson.com/products').then((response)=>{
  //     // setApiResponse(response.data.products);

  //     setConversation([ ...conversation,
  //       { type: "user", text: userInput.trim() },
  //       { type: "bot", text: response.data.products },
  //     ]);
  //     setUserInput("");
  //   });
    

  //   } catch (error) {
  //     console.log(error);
  //     setUserInput("");
  //   }
  // };

  const handleSubmit = () => {
    handleUserMessage();
  }


  return (
    <div>
        <div className='textClass'>
            <div className='divClass'>
              {/* {apiResponse?.map((res , index) => (
                <div key={index}>
                  {res?.category}
                </div>
              ))} */}

              {conversation.map((message, index) => (
                <>
                  <div key={index} className={`message ${message.type}`}>
                     <strong>{message.type} :</strong> {message.text}
                  </div>
                  <br />
                </>
              ))}
            </div>
        </div>
        <div className="chatgpt-text-input">
            <input
                type="text"
                value={userInput}
                onChange={handleUserInput}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleUserMessage();
                  }
                }}
                placeholder="Type your message..."
            />
            <button onClick={handleSubmit}>Send</button>
        </div>
    </div>
  );
};

export default ChatGptTextInput;
