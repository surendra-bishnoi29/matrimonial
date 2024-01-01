import React, { useState } from 'react';

import { useDropzone } from 'react-dropzone';
import axios from 'axios';

const S3ImageUploader = () => {
    const [uploadProgress, setUploadProgress] = useState(0);

    const onDrop = async (acceptedFiles: any) => {
        const file = acceptedFiles[0];
        try {
            // Fetch presigned PUT URL from your server
            const { data } = await axios.get('/get-presigned-url'); // Replace with your endpoint

            await axios.put(data.url, file, {
                onUploadProgress: (progressEvent: any) => {
                    const percentCompleted = Math.round(
                        (progressEvent.loaded * 100) / progressEvent.total
                    );
                    setUploadProgress(percentCompleted);
                },
            });

            // Handle successful upload here
            console.log('File uploaded successfully!');
        } catch (error) {
            // Handle error
            console.error('Error uploading file:', error);
        }
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <div>
            <div {...getRootProps()} style={{
                border: '2px dashed #ccc',
                borderRadius: '4px',
                padding: '20px',
                textAlign: 'center',
                cursor: 'pointer',
            }}>
                <input {...getInputProps()} />
                <p>Drag & drop an image here, or click to select one</p>
                {uploadProgress > 0 && <p>Uploading: {uploadProgress}%</p>}
                {uploadProgress}
            </div>
        </div>
    );
};

const dropzoneStyle = {
    border: '2px dashed #ccc',
    borderRadius: '4px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
};

export default S3ImageUploader;