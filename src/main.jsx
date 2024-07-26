import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux'
import globalStore from './Components/Redux/Store.jsx';
createRoot(document.getElementById('root')).render(
  <Provider store={globalStore}>
    <RouterProvider router={App} />
  </Provider>
)