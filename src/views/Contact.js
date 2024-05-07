import React from 'react'
import styles from '../styles/Contact.module.scss'

export default function Contact(){
    return(
        <>
            <h1>Contact Me!</h1>
            <section>
                <div className={styles.imgContainer}>
                    <img src="" alt="LinkedIn Logo"/>
                    <img src="" alt="Indeed Logo"/>
                    <img src="" alt="Email Icon"/>
                </div>
            </section>
            <hr width={1000}></hr>
            <section>
                <div className={styles.textContainer}>
                    <p>
                        Thank you for visiting my webpage. If you're interested in connecting with me, please feel free to use the 
                        provided links above. I eagerly anticipate the opportunity to connect with you and discuss potential collaborations or opportunities.
                        I am looking forward to hearing from you soon!
                    </p>
                </div>
            </section>

        </>
    )
}