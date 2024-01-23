import React from 'react'
import './works.css'
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';

const Works = () => {
    return (
        <section id='works'>
            <h2 className='worksTitle'>My Portfolio</h2>
            <span className="worksdisc">This react portfolio website can help you to showcase your work experience on online website.
                You can add this React JS portfolio website in your project and resume.This react portfolio website can help you to showcase your work experience on online website.
                You can add this React JS portfolio website in your project and resume.</span>
                <div className='worksImgs'>
                    <img src={Portfolio1} alt='' className='worksImg'></img>
                    <img src={Portfolio2} alt='' className='worksImg'></img>
                    <img src={Portfolio3} alt='' className='worksImg'></img>
                    <img src={Portfolio4} alt='' className='worksImg'></img>
                    <img src={Portfolio5} alt='' className='worksImg'></img>
                    <img src={Portfolio6} alt='' className='worksImg'></img>
                </div>
        </section>
    )
}

export default Works