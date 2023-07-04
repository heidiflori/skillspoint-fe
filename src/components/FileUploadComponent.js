import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import apiUrl from '../apiConfig';
import Cookies from 'js-cookie';
import { faUpload} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'react-bootstrap';

const FileUploadComponent = ({ trainingId }) => {
  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('trainingId', trainingId); // add this line

    try {
      const token = Cookies.get('token');

      const res = await axios.post(
        `${apiUrl}/api/skills/upload`, 
        formData, 
        { headers: { 
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
         } 
        });

      console.log('Upload successful:', res.data);
    } catch (err) {
      console.error('Failed to upload file:', err);
    }
  }, [trainingId]); // add trainingId here

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Container>
    <div {...getRootProps()} style={{border: '1px solid #B5B5B5', borderRadius: '10px', padding: '10px', marginLeft:"75px", marginRight:"75px"}}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%", gap: "1px"}}>
            <p style={{fontSize:"15px", color:"#BFBFBF"}}>Drop the files here...</p>
            <p style={{fontSize:"40px", color:"#BFBFBF"}}><FontAwesomeIcon icon={faUpload} /></p>
            <p style={{fontSize:"15px", color:"#BFBFBF"}}>(.pdf, .zip)</p>
          </div> :
          <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%", gap: "1px"}}>
            <p style={{fontSize:"15px", color:"#BFBFBF"}}>Drag and drop files here</p>
            <p style={{fontSize:"40px", color:"#BFBFBF"}}><FontAwesomeIcon icon={faUpload} /></p>
            <p style={{fontSize:"15px", color:"#BFBFBF"}}>(.pdf, .zip)</p>
          </div>
      }
    </div>
    </Container>
  );
}

export default FileUploadComponent;
