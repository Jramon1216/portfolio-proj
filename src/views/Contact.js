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
                    <p>Lorem ipsum stuff</p>
                </div>
            </section>

        </>
    )
}