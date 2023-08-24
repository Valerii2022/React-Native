// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";
import {
  getReactNativePersistence,
  initializeAuth,
} from "@react-native-firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyAc07678pazq8v_jAi9VDFeFLRWCz9W8NQ",
//   authDomain: "awesome-project-669ee.firebaseapp.com",
//   databaseURL: "https://awesome-project-669ee.firebaseio.com",
//   projectId: "awesome-project-669ee",
//   storageBucket: "awesome-project-669ee.appspot.com",
//   messagingSenderId: "713252299828",
//   appId: "1:713252299828:web:4ea574fe0abca081bdd661",
//   measurementId: "G-LSH850ZBWW",
// };

const firebaseConfig = {
  apiKey: "AIzaSyDHaz2VCQfWpDaFhW43X3ei3uL1jFYxn8M",
  authDomain: "react-native-f3cec.firebaseapp.com",
  databaseURL: "https://react-native-f3cec.firebaseio.com",
  projectId: "react-native-f3cec",
  storageBucket: "react-native-f3cec.appspot.com",
  messagingSenderId: "749273125545",
  appId: "1:749273125545:web:d267e8eec9b48d93530fb8",
  measurementId: "G-5VCRWNKMHF",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
// export const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(AsyncStorage),
// });
