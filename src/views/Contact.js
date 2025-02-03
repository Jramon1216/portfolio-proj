import React from 'react'
import styles from '../styles/Contact.module.scss'
import linkedInSVG from '../assets/svg/linkedIn.svg';
import githubSVG from '../assets/svg/github.svg';
import emailSVG from '../assets/svg/email.svg';



export default function Contact(){


    return(
        <>
            <h1>Contact Me!</h1>
            <section>
                <div className={styles.imgContainer}>
                    <a href="https://www.linkedin.com/in/jonathan-ramon-a66b281a3" target='_blank' rel="noopener noreferrer">
                        <img src={linkedInSVG} alt="LinkedIn Logo"/>
                    </a>
                    <a href="https://github.com/Jramon1216" target='_blank' rel="noopener noreferrer">
                        <img src={githubSVG} alt="Github Logo"/> 
                    </a>
                    {/* <a>
                        <img src={emailSVG} alt="Email Icon"/> 
                    </a> */}
                </div>
            </section>
            <hr width={1000}></hr>
            <section>
                <div className={styles.textContainer}>
                    <p>
                        Thank you for visiting my portfolio! 
                        Let’s connect—I’m always excited to engage with fellow tech enthusiasts, explore innovative solutions, and make meaningful contributions to the world of software development!
                    </p>
                </div>
            </section>
        </>
    )
}