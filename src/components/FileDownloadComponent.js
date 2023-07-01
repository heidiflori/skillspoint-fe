import React, { useState, useEffect } from 'react';
import axios from 'axios';
import apiUrl from '../apiConfig';
import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload} from '@fortawesome/free-solid-svg-icons';
import { Table, Container, Button } from 'react-bootstrap';

function FileDownloadComponent({ trainingId }) {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const token = Cookies.get('token');
        const response = await axios.get(`${apiUrl}/api/skills/training-files/${trainingId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setFiles(response.data);
      } catch (err) {
        console.error('Failed to fetch files:', err);
      }
    };

    fetchFiles();
  }, [trainingId]);

  const handleFileDownload = async (filename) => {
    try {
      const token = Cookies.get('token');
      const response = await axios.get(`${apiUrl}/api/skills/download/${filename}`, {
        responseType: 'blob',
        headers: {
            'Authorization': `Bearer ${token}`
        }
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
    } catch (err) {
      console.error('Failed to download file:', err);
    }
  };

  return (
    <Container>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th className="text-center">File Name</th>
          <th className="text-center">Download</th>
        </tr>
      </thead>
      <tbody>
        {files.map(file => (
          <tr key={file.id}>
            <td >{file.fileName}</td>
            <td className="text-center" style={{paddingBottom:"16px"}}>
              <Button onClick={() => handleFileDownload(file.fileName)}><FontAwesomeIcon icon={faDownload} /> Download</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </Container>
  );
}

export default FileDownloadComponent;
