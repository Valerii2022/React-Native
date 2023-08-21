import { doc, updateDoc } from "firebase/firestore";
import { db } from "./config";

const updateDataInFirestore = async (collectionName, docId) => {
  try {
    const ref = doc(db, collectionName, docId);

    await updateDoc(ref, {
      age: 25,
    });
    console.log("document updated");
  } catch (error) {
    console.log(error);
  }
};

export default updateDataInFirestore;
