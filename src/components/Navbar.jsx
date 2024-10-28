import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.style.css'

export default function Navbar() {

  const openmenu = () => {
    const topbar = document.getElementById("menu")
    topbar.style.height = "100%"
  }
  const closemenu = () => {
    const topbar = document.getElementById("menu")
    topbar.style.height = "0%"
  }

  return (
    <>

      <nav className='nav'>


        <div className='inner-nav'>
          <h2>
            <Link className='cursor-pointer color-white title' to={"/"}>Editor.md</Link>
          </h2>
          <ul className='ul'>
            <li><Link className='link' to={"/"}>Home</Link></li>
            <li><Link className='link' to={"/aboutmarkdown"}>About Markdown</Link></li>
            <li><Link className='link' to={"/howtouse"}>How to use</Link></li>
          </ul>

          <button className='openmenubtn' onClick={openmenu}>
            Menu
          </button>

        </div>

        <div className='topbar-nav' id='menu' >
          <div className='options'>
            <h2 className='topbar-topside'>
              <Link className='cursor-pointer color-white title' to={"/"}>Editor.md</Link>
              <button className='closemenubtn'  onClick={closemenu}>
                Close
              </button>
            </h2>
            <ul className='options-ul'>
              <Link className='' to={"/"} onClick={closemenu}>Home</Link>
              <Link className='' to={"/aboutmarkdown"} onClick={closemenu}>About Markdown</Link>
              <Link className='' to={"/howtouse"} onClick={closemenu}>How to use</Link>
            </ul>

          </div>


        </div>


      </nav>
    </>
  )
}
