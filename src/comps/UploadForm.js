import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {

  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ['image/png', 'image/jpeg'];

  const upload = (e) => {
    const selected = e.target.files[0];
    console.log(selected)
    if (selected && types.includes(selected.type)) {
      setFile(selected)
      setError('')
    } else {
      setFile(null)
      setError('Please upload an image file (png or jpeg)!')
    }
  }

  return(
    <form>
      <label htmlFor="file">+</label>
      <input type="file" id="file" onChange={upload} accept="image/*"></input>
      <div className="output">
        { error && <div className="error">{error}</div> }
        { file && <div className="file">{file.name}</div> }
        { file && <ProgressBar file={file} setFile={setFile} /> }
      </div>
    </form>
  )
}

export default UploadForm;
