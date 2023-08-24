import { collection, addDoc } from "firebase/firestore";
import { db } from "../config";

const writeDataToFirestore = async ({ login, email, password }) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      login,
      email,
      password,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
};

export default writeDataToFirestore;
