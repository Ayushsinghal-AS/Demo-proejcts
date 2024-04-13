import React, { useState } from 'react';
import data from './data/data.json';
import DOMPurify from "dompurify";

const SearchDescription = () => {
  const [searchId, setSearchId] = useState('');
  const [description, setDescription] = useState('');

  const handleSearch = () => {
    const result = data.find(item => item.joborder_id === parseInt(searchId));
    if (result) {
      setDescription(result.description);
    } else {
      setDescription('No description found.');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchId}
        onChange={e => setSearchId(e.target.value)}
        placeholder="Enter ID"
      />
      <button onClick={handleSearch}>Search</button>
      <div dangerouslySetInnerHTML={{ __html: `<p>${description}</p>` }} />
        
    </div>
  );
};

export default SearchDescription;
