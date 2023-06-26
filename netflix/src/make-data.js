import { getFirestore, collection, addDoc } from 'firebase/firestore';

export function seedDatabase(firebase) {
  function getUUID() {
    // eslint gets funny about bitwise
    /* eslint-disable */
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const piece = (Math.random() * 16) | 0;
        const elem = c === 'x' ? piece : (piece & 0x3) | 0x8;
        return elem.toString(16);
    });
    /* eslint-enable */
  }
  
  //받은 firebase initializeApp(config)를 getFirestore(firebase)로 넘겨준다.
  const firestore = getFirestore(firebase);
  
  /* Series
    ============================================ */
  // Documentaries

  // firevbase v9 fix

  addDoc(collection(firestore, 'films'),{
    id: getUUID(),
    title: 'The Prestige',
    description:
      'Two friends and fellow magicians become bitter enemies after a sudden tragedy. As they devote themselves to this rivalry, they make sacrifices that bring them fame but with terrible consequences.',
    genre: 'drama',
    maturity: '15',
    slug: 'the-prestige',
  });
}
