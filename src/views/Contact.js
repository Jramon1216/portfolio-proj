import React from 'react'
import styles from '../styles/Contact.module.scss'
import linkedInSVG from '../assets/svg/linkedIn.svg';
import githubSVG from '../assets/svg/github.svg';
import emailSVG from '../assets/svg/email.svg';

/**
 
 */

export default function Contact(){
    return(
        <>
            <h1>Contact Me!</h1>
            <section>
                <div className={styles.imgContainer}>
                    <img src={linkedInSVG} alt="LinkedIn Logo"/> {/*TODO: REPLACE THIS SVG WITH THE SAME ONE BUT WITH A TRACE COLOR MATCHING THE SITE -> https://www.svgrepo.com/svg/365515/linkedin-logo-thin */}
                    <img src={githubSVG} alt="Github Logo"/> {/*TODO: REPLACE THIS SVG WITH THE SAME ONE BUT WITH A TRACE COLOR MATCHING THE SITE -> https://www.svgrepo.com/svg/447165/github-outline */}
                    <img src={emailSVG} alt="Email Icon"/> {/*TODO: REPLACE THIS SVG WITH THE SAME ONE BUT WITH A TRACE COLOR MATCHING THE SITE -> https://www.svgrepo.com/svg/498800/email */}
                </div>
            </section>
            <hr width={1000}></hr>
            <section>
                <div className={styles.textContainer}>
                    <p>
                        Thank you for visiting my portfolio! 
                        Feel free to connect using the links above—I’d love to discuss potential collaborations or opportunities. 
                        Looking forward to hearing from you soon!
                    </p>
                </div>
            </section>
        </>
    )
}