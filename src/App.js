import React, { useState } from 'react';
import FileUploader from './components/FileUploader';
import MergeButton from './components/MergeButton';
import axios from 'axios';
import './App.css';

function App() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [password, setPassword] = useState('');
  const [fileName, setFileName] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFileNameChange = (e) => {
    setFileName(e.target.value);
  };

  const handleFilesSelected = (files) => {
    setSelectedFiles(files);
  };

  const handleMergeAndDownload = async () => {
    try {
      const formData = new FormData();
      formData.append('password', password);
      formData.append('file_name', fileName);
      selectedFiles.forEach((file, index) => {
        formData.append(`screenshots`, file);
      });

      const response = await axios.post('http://localhost:4000/mergeAndDownload', formData, {
        responseType: 'blob', // Important for handling binary data
      });

      const blob = new Blob([response.data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${fileName}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      setPassword('');
      setFileName('');
    } catch (error) {
      console.error('Error merging and downloading PDF:', error);
    }
  };

  return (
    <div className="container">
      <h2 className="title">PDF Merge Tool</h2>
      <FileUploader onFilesSelected={handleFilesSelected} />
      <div className="form-group">
        <label>Enter the filename:</label>
        <input
          type='text'
          value={fileName}
          onChange={handleFileNameChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Enter the password:</label>
        <input
          type='password'
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <MergeButton onClick={handleMergeAndDownload} />
    </div>
  );
}

export default App;
