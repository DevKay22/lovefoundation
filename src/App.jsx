import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import  Home from './Pages/Home';
import About from './Pages/About';
import Media from './Pages/Media';
import What from './Pages/What';
import Contact from './Pages/Contact';
import ErrorPage from './Pages/ErrorPage';
import Layout from './Components/Layout';
import Donation from './Pages/Donation';

const App = () => {

  
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Home />}, 
    
      // {path: "register", element: <Register/>},
      {path: "about-us", element: <About/>},
      {path: "what-we-do", element: <What/>},
      {path: "media", element: <Media/>},
      {path: "contact", element: <Contact/>},
      {path: "donate", element: <Donation/>}
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

}
export default App