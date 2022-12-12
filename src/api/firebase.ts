import { initializeApp } from "firebase/app"
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage"
import { getFirestore, doc, getDoc } from "firebase/firestore/lite"
import { IWorks } from "../store/redusers/main/types"

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
    
    return data
}

export const getImagesWorks = async (works: IWorks[] | null) => {

    const urls: any = works?.map(async (work) => {

        const imageListRef = ref(storage, `works/${work.folder}`)

        const { items } = await listAll(imageListRef)

        const images = items.map(async(item: any) => {
            return await getDownloadURL(item)
        })

        return Promise.all(images).then((values) => {
            return {
                id: work.id,
                urls: values
            }
        })
    })
    
    return urls
}
