import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import { db } from "./firebaseConfig";

const productsRef = collection(db, "products");
const ordersRef = collection(db, "orders");

export async function getProducts() {
  const snapshot = await getDocs(productsRef);
  return snapshot.docs.map((docu) => ({ id: docu.id, ...docu.data() }));
}

export async function getProductsByCategory(categoryId) {
  const q = query(productsRef, where("category", "==", categoryId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((docu) => ({ id: docu.id, ...docu.data() }));
}

export async function getProductById(id) {
  const docRef = doc(db, "products", id);
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) return null;
  return { id: snapshot.id, ...snapshot.data() };
}

export async function createOrder(orderData) {
  const orderWithDate = {
    ...orderData,
    date: Timestamp.fromDate(new Date()),
  };

  const docRef = await addDoc(ordersRef, orderWithDate);
  return docRef.id;
}
