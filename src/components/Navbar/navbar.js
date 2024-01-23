import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo-removebg-preview.png'
import contactImg from '../../assets/contact.png'
import { Link } from 'react-scroll'
import menu from '../../assets/menu.png'
// import cvfile from '../../assets/'

const Navbar = () => {
    const [showMenu, setshowMenu] =useState(false);
  return (
    <nav className='navbar'>
      <img src={logo} alt='logo' className='logo' />
      <div className='desktopMenu'>
        <Link activeClass='active' to='intro' spy={true} smooth={true}
          offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true}
          offset={-50} duration={500}  className='desktopMenuListItem'>About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true}
          offset={-100} duration={500}  className='desktopMenuListItem'>Portfolio</Link>
        <Link activeClass='active' to='contactPage' spy={true} smooth={true}
          offset={-100} duration={500}  className='desktopMenuListItem'>Contact</Link>
      </div>
      <button className='desktopMenuBtn'  onClick={()=>{

      }}>
        <img src={contactImg} alt='' className='desktopMenuImg' />Download CV
      </button>

      <img src={menu} alt='menu' className='burgermenu' onClick={()=>setshowMenu(!showMenu)} />
      <div className='navMenu' style={{display : showMenu? 'flex':'none'}} >
        <Link activeClass='active' to='intro' spy={true} smooth={true}
          offset={-100} duration={500} className='listItem' onClick={()=>setshowMenu(false)
          } >Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true}
          offset={-50} duration={500}  className='listItem' onClick={()=>setshowMenu(false)
          } >About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true}
          offset={-100} duration={500}  className='listItem' onClick={()=>setshowMenu(false)
          } >Portfolio</Link>
        <Link activeClass='active' to='contactPage' spy={true} smooth={true}
          offset={-100} duration={500}  className='listItem' onClick={()=>setshowMenu(false)
          } >Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar