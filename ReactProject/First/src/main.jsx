import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MainCourse from './MainCourse.jsx'
import Blog from './Blog.jsx'
import MovieGrid from './MovieGrid.jsx'
import AppN from './AppN.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App>
  </StrictMode>,
)
