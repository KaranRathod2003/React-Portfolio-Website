import React from 'react'
import './intro.css'
import bg from '../../assets/images-removebg-PhotoRoom.png-PhotoRoom.png'
import { Link } from 'react-scroll'
import btnImg from '../../assets/hireme.png'


const Intro = () => {
  return (
<section id='intro'>
    <div className='introContent'>
    <span className='hello'>Hello,</span>
    <span className='introText'>I'm <span className='introName'>Karan</span><br/>Software Developer</span>
    <p className='introPara'>Highly Analytical And Process Oriented With Experience In Creating Various Projects<br/>and good experience in projects</p>
    <Link><button className='btn'><img src={btnImg} alt='' className='btnImg'></img>Hire Me</button></Link>
    </div>
    <img src={bg} alt='profile' className='bg'></img>
</section>
  )
}

export default Intro