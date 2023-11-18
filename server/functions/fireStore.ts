import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  QuerySnapshot,
  addDoc,
  DocumentReference,
  setDoc,
  doc,
} from 'firebase/firestore'
import { db } from '../db/firestore.js'
import { NewStudyData, StudyPlan } from '../models/ai.js'
import { arrayUnion, getDoc, updateDoc } from 'firebase/firestore'
// Initialize Firebase (assuming you've already done this)

export async function initialTest() {
  // Get a reference to the "users" collection
  const usersCollection = collection(db, 'users')
  // Create a query to get all documents in the "users" collection
  const q = query(usersCollection)
  // Execute the query
  const querySnapshot = await getDocs(q)
  // Loop through the documents in the query result
  querySnapshot.forEach((doc) => {
    // doc.data() is the data of the document
    console.log(doc.id, ' => ', doc.data())
  })
}

export function getAllDocs(): Promise<QuerySnapshot> {
  const q = query(collection(db, 'users'))
  return getDocs(q)
}

export async function createNewSession(studyInfo: NewStudyData): Promise<any> {
  console.log('hitting server upload');
  
  const { data, id } = studyInfo
  const documentRef = doc(db, 'users', id)
  return updateDoc(documentRef, {
    study_topics: arrayUnion(data),
  })
}

export function addStudySession(data: NewStudyData) {
  // we need to include the user_id:
  // This will become the token
  return addDoc(collection(db, 'users'), { data })
}
