// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAvhOkabYQuydlzAbrzrgvpfBV1Z8gP1Tk",
  authDomain: "final-pfoject.firebaseapp.com",
  databaseURL: "https://final-pfoject.firebaseio.com",
  projectId: "final-pfoject",
  storageBucket: "final-pfoject.appspot.com",
  messagingSenderId: "535838152318",
  appId: "1:535838152318:web:2688975729dd69044baa2f",
  measurementId: "G-2GQCKBTVNN",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
