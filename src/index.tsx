import React from 'react';
import ReactDOM from "react-dom/client";
import './styles/index.css';
import App from './App';
import { store } from './Redux/store';
import { Provider } from 'react-redux'
import PageBook from './pages/PageBook'
import ContextAppProvider from './components/context/contextAppProvider';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getFirestore } from '@firebase/firestore';
import { getDatabase } from "firebase/database";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyAhiBtYzJYtKXpLG--GJJiiVVi2P6C0tGI",
  authDomain: "library-87b5e.firebaseapp.com",
  databaseURL: "https://library-87b5e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "library-87b5e",
  storageBucket: "library-87b5e.appspot.com",
  messagingSenderId: "134211454624",
  appId: "1:134211454624:web:47deb5265ce8fbc09d2bc5",
  measurementId: "G-TESB7RW1XQ"
};

export const app = initializeApp(firebaseConfig);
export const fireStore = getFirestore(app)
const analytics = getAnalytics(app);
const db = getDatabase(app);


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  }, {
    path: "/book",
    element: <PageBook/>,
  },
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextAppProvider>
        <RouterProvider router={router} />
      </ContextAppProvider>
    </Provider>
  </React.StrictMode>
);
