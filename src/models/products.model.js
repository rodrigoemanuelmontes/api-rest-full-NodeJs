import { collection, getDocs, doc, getDoc, deleteDoc, addDoc, updateDoc } from 'firebase/firestore';
import { initializeFirebaseApp } from './firebase.config.js';

const db = initializeFirebaseApp();

const productsCol = collection(db, 'products');

export const getAllProducts = async () => {
  const snapshot = await getDocs(productsCol);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getProductById = async (id) => {
  const ref = doc(db, 'products', id);
  const snapshot = await getDoc(ref);
  return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
};

export const createProduct = async (data) => {
  const docRef = await addDoc(productsCol, data);
  const snapshot = await getDoc(docRef);
  return { id: docRef.id, ...snapshot.data() };
};

export const deleteProduct = async (id) => {
  const ref = doc(db, 'products', id);
  await deleteDoc(ref);
  return true;
};

export const updateProduct = async (id, data) => {
  const ref = doc(db, 'products', id);
  await updateDoc(ref, data);
  const updated = await getDoc(ref);
  return { id: updated.id, ...updated.data() };
};

export const existsProduct = async (id) => {
  const ref = doc(db, 'products', id);
  const snapshot = await getDoc(ref);
  return snapshot.exists();
};
