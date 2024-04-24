// import React, { useCallback } from 'react';
// import { useDropzone } from 'react-dropzone';

// const FileUploader = ({ onFilesSelected }) => {
//   const onDrop = useCallback((acceptedFiles) => {
//     onFilesSelected(acceptedFiles);
//   }, []);

//   const { getRootProps, getInputProps } = useDropzone({ onDrop });

//   return (
//     <div {...getRootProps()}>
//       <input {...getInputProps()} />
//       <button className="select-files-button">Click to select files</button>
//     </div>
//   );
// };

// export default FileUploader;


import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const FileUploader = ({ onFilesSelected }) => {
  const onDrop = useCallback((acceptedFiles) => {
    onFilesSelected(acceptedFiles);
  }, [onFilesSelected]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <button className="select-files-button">Click to select files</button>
    </div>
  );
};

export default FileUploader;
