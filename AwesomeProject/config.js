// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "api-key",
  authDomain: "awesome-project-669ee.firebaseapp.com",
  databaseURL: "https://awesome-project-669ee.firebaseio.com",
  projectId: "awesome-project-669ee",
  storageBucket: "awesome-project-669ee.appspot.com",
  messagingSenderId: "713252299828",
  appId: "app-id",
  measurementId: "G-measurement-id",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
