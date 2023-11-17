import { getFirestore, collection, getDocs, query, where, QuerySnapshot, addDoc, DocumentReference } from 'firebase/firestore/lite';
import {db} from '../db/firestore.js';
import { StudyPlan } from '../models/ai.js';
// Initialize Firebase (assuming you've already done this)


export async function initialTest() {
  // Get a reference to the "users" collection
  const usersCollection = collection(db, 'users');
  // Create a query to get all documents in the "users" collection
  const q = query(usersCollection);
  // Execute the query
  const querySnapshot = await getDocs(q);
  // Loop through the documents in the query result
  querySnapshot.forEach((doc) => {
    // doc.data() is the data of the document
    console.log(doc.id, ' => ', doc.data());
  });
}


export function getAllDocs(): Promise<QuerySnapshot> {
  const q = query(collection(db, 'users'))
  return getDocs(q)
}

export function createNewSession(test: string):Promise<DocumentReference> {
  return addDoc(collection(db, 'users'), {topic: test})
}


export function addStudySession(data: StudyPlan) {
  return addDoc(collection(db, 'users'), {data})
}