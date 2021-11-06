import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collection) => {
  const [docs, setDocs] = useState();
  const db = projectFirestore.getFirestore();

  useEffect(() => {
    const query = projectFirestore.query(projectFirestore.collection(db, collection), projectFirestore.orderBy("createdAt", "desc"));
    const unsub = projectFirestore.onSnapshot(query, (snapshot) => {
      let documents = [];
      snapshot.forEach((doc) => {
        documents.push({...doc.data(), id: doc.id})
      })
      setDocs(documents);
      console.log(documents)
    })
    return () => unsub();
  }, [collection])
  return { docs };
}

export default useFirestore;
