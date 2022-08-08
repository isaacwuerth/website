import React, { useEffect, useState } from 'react'
import './App.sass'
import { Helmet } from 'react-helmet'
import { Link, Outlet } from 'react-router-dom'

type navitem = {
  title: string
  path: string
}

function App() {
  const title = 'Isaac Würth'
  const [darkMode, setDarkmode] = useState<boolean>(true)

  const navigation: navitem[] = [
    { title: 'About', path: '/about' },
    { title: 'Projects', path: '/projects' },
    { title: 'Blog', path: '/blog' },
  ]

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme:dark)').matches
    setDarkmode(prefersDarkMode)
  }, [])

  function toggleButton() {
    setDarkmode(!darkMode)
  }

  return (
    <div className='app'>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <header className='app-header blur'>
        <div className='app-header-logo'>IW</div>
        <ul id='app-nav'>
          {navigation.map((value) => (
            <li>
              <Link to={value.path}>{value.title}</Link>
            </li>
          ))}
        </ul>
        <button type='button' id='theme-toggle' onClick={toggleButton} className={darkMode ? 'theme-toggle-moon' : ''}>
          <div id='theme-toggle-shape' className={darkMode ? 'theme-toggle-moon-shape' : 'theme-toggle-sun'} />
        </button>
      </header>
      <div className='app-content blur'>
        <Outlet />
      </div>
      <footer className='app-footer blur' />
    </div>
  )
}

export default App
