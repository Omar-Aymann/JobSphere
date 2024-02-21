import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home.jsx'
import Jobs from './components/Jobs.jsx'
import Job from './components/Job.jsx'
import Login from './components/Login.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />}></Route>
      <Route path="jobs" element={<Jobs />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="job/:id" element={<Job />}></Route>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router}>
          
      </RouterProvider>
    </React.StrictMode>
)
