import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Blog from './routes/Blog'
import Blogcontent from './components/blog/Blogcontent'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='blog' element={<Blog />} />
          <Route path='blog/:postid' element={<Blogcontent />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
