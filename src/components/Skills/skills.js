import React from 'react'
import UIdesign from '../../assets/ui-design.png';
import Appdesign from '../../assets/app-design.png';
import Webdesign from '../../assets/website-design.png';
import './skills.css'

const Skills = () => {
  return (
   <section id='skills'>
    <span className='skillTitle'>What I do</span>
    <span className='skilldisc'>In this tutorial we will make personal portfolio website design in React JS. This personal portfolio website or Resume website will contains the personal information, skills, work experience or portfolio, clients details and contact section with fully function contact form. This contact form will send the enquiries to your email address.</span>
    <div className='skillBars'>
        <div className='skillbar'>
            <img src={UIdesign} alt='IMG' className='skillbarImg'></img>
            <div className='skillbarText'>
                <h2>UI/UX Design</h2>
                <p>This is lorem text, update afterwords </p>
            </div>
        </div>
        <div className='skillbar'>
            <img src={Appdesign} alt='IMG' className='skillbarImg'></img>
            <div className='skillbarText'>
                <h2>App Design</h2>
                <p>This is lorem text, update afterwords</p>
            </div>
        </div>
        <div className='skillbar'>
            <img src={Webdesign} alt='' className='skillbarImg'></img>
            <div className='skillbarText'>
                <h2>Web Design</h2>
                <p>This is lorem text, update afterwords</p>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Skills