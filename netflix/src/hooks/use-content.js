import { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function useContent(target) {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(firebase.firestore(), target));
        const allContent = querySnapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));

        setContent(allContent);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [firebase, target]);

  return { [target]: content };
}