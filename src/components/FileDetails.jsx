import React, { useState } from 'react';

const MyForm = () => {
  const [password, setPassword] = useState('');
  const [fileName, setFileName] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFileNameChange = (e) => {
    setFileName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <div>
        <label>File Name:</label>
        <input
          type="text"
          value={fileName}
          onChange={handleFileNameChange}
          required
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default MyForm;
