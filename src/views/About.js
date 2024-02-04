import React from 'react'
import '../styles/About.module.scss'

export default function About(){
    return(
        <>
            <h1>About Me</h1>
            <section className='aboutMain'>
                <img src ="" alt='some generic coding image'/>
                {/* Center this */}
                <p>Some more Lorem ipsum stuff</p>
            </section>
            <section className='jobExperience'>
                <p>Workplace expeience 1</p>
                {/* These should be inline */}
                <img src="" alt="place holder rab image"/>
            </section>
            <section className="jobExperience">
                <p>Workplace expeience 2</p>
                {/* These should be inline */}
                <img src="" alt="place holder morgan stanley image"/>
            </section>
        </>
    )
}