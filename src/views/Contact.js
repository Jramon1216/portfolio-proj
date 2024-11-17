import React from 'react'
import styles from '../styles/Contact.module.scss'
import linkedInSVG from '../assets/svg/linkedin-logo-fill-svgrepo-com.svg';

export default function Contact(){
    return(
        <>
            <h1>Contact Me!</h1>
            <section>
                <div className={styles.imgContainer}>
                    <img src={linkedInSVG} alt="LinkedIn Logo"/>
                    <img src="" alt="Github Logo"/>
                    <img src="" alt="Email Icon"/>
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