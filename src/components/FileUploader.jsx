import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const FileUploader = ({ onFilesSelected }) => {
  const onDrop = useCallback((acceptedFiles) => {
    onFilesSelected(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <button className="select-files-button">Click to select files</button>
    </div>
  );
};

export default FileUploader;

// import React from 'react';

// const FileUploader = ({ onFilesSelected }) => {
//   const handleFileChange = (e) => {
//     const files = e.target.files;
//     onFilesSelected(files);
//   };

//   return (
//     <div>
//       <label className="custom-file-upload">
//         <input type="file" onChange={handleFileChange} multiple />
//         Click to select files
//       </label>
//     </div>
//   );
// };

// export default FileUploader;

