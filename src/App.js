import React, {useState} from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImgGrid from './comps/ImgGrid';
import Modal from './comps/Modal';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImgGrid setSelectedImg={setSelectedImg} />
      {selectedImg && <Modal setSelectedImg={setSelectedImg} selectedImg={selectedImg} />}
    </div>
  );
}

export default App;
