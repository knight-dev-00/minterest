import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore } from '../firebase/config';

const useStorage = (file) => {
  const [progress, setProgress] = useState(null);
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storage = projectStorage.getStorage();
    const db = projectFirestore.getFirestore();
    // references
    const collectionRef = projectFirestore.doc(projectFirestore.collection(db, 'images'));
    const storageRef = projectStorage.ref(storage, 'images/' + file.name);
    const uploadTask = projectStorage.uploadBytesResumable(storageRef, file, {contentType: 'image/png'});
    uploadTask.on('state_changed', (snap) => {
      console.log(snap.totalBytes)
      let percent = (snap.bytesTransferred / snap.totalBytes) * 100;
      console.log(percent)
      setProgress(percent)
    }, (error) => {
      setError(error)
    }, () => {
      projectStorage.getDownloadURL(storageRef).then((downloadURL) => {
        const createdAt = projectFirestore.serverTimestamp();
        projectFirestore.setDoc(collectionRef, {url: downloadURL, createdAt}).then(
          (res) => {
            return res;
          }
        )
        setUrl(downloadURL)
      });
    })
  }, [file])
  return { progress, error, url }
}

export default useStorage;
