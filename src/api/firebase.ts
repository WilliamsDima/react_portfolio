import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"
import { getFirestore, doc, getDoc } from "firebase/firestore/lite"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)

export const getData = async () => {

    const docRef = doc(db, "portfolio", 'data')
    const docSnap = await getDoc(docRef)
    const data = docSnap.data()

    console.log('data', data);
    
    return data
}
