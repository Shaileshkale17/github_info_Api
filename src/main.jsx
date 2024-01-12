import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Users from './Router/Users.jsx'
import UserInfo from './components/UserInfo/UserInfo.jsx'

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Users/>}/>
      <Route path='/:name' element={<UserInfo/>}/>
      
    </Route>
  ])
);


ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router}>
      <App />
    </RouterProvider>
)
