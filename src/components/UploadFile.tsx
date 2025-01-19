import React from 'react'
import { api } from '../config';

const UploadFile = () => {

    const uploadFile = (file: File) => {

        const formData: FormData = new FormData();

        formData.append('file', file);

        api.post("/upload", formData)
        .then((response) => {console.log("File uploaded : ", response.data)})
        .catch((error: Error) => {console.log("Error occurred while uploading file : ", error)})

    }

  return (
    <div>
        <input type="file" onChange={(e) => uploadFile(e.target.files![0])} />
    </div>
  )
}

export default UploadFile