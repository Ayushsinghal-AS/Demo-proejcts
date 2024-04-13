import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ChatGptSidebar.css'; 

const ChatGptSidebar = ({value}) => {

  const [menuItems, setMenuItems] = useState([]);

  useEffect(async() => {
    const response = await axios.get('https://dummyjson.com/todos')
    .then((res) => {
      console.log("13",res.data);
      
      setMenuItems(res.data.todos)
    })
    
  },[]);
 
  const handleAddNewChat = () => {
    const newItem = { label: `New Chat ${menuItems.length + 1}`};
    setMenuItems([newItem, ...menuItems]);
  };

  const handleDelete = (index) => {
    const updatedItems = [...menuItems];
    updatedItems.splice(index, 1);
    setMenuItems(updatedItems);
  };

  const handleNewChatDisplay = () => {

  }


  console.log(menuItems);
  return (
    <div className="chatgpt-sidebar">
      <div className="menu-items">
      <div className="menu-item" onClick={handleAddNewChat}>
        <i class="fa-regular fa-plus"></i>
          <span className='textStyle'>&nbsp;&nbsp;&nbsp;&nbsp;New Chat</span>
      </div>
        {menuItems.map((item, index) => (
          <div className="menu-item2" key={index}>
            <div onClick={() => handleNewChatDisplay()}>{value ? (value.length > 15 ? value.substring(0, 15) + "..." : value) : item.id}</div>
            {index > 0 ? <button onClick={(index) => handleDelete(index)}><span><i class="fa-solid fa-trash-can"></i></span></button> : ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatGptSidebar;
