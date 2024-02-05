import React from 'react'
import styles from '../styles/About.module.scss'

export default function About(){
    return(
        <>
            <h1>About Me</h1>
            <section>
                <div className={styles.aboutMain}> 
                    <img className='genImage' src ="" alt='some generic coding image'/>
                    <p>Some more Lorem ipsum stuff</p>
                </div>
            </section>
            <section>
                <div className={styles.jobEntry}>
                    <div className={styles.textContainer}>
                        <h2>Workplace experience 1</h2>
                        <p>
                            Lorem ipsum stuff
                        </p>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src="" alt="place holder rab image"/>
                    </div>
                </div>
            </section>
            <section>
                <div className={styles.jobEntry}>
                    <div className={styles.textContainer}>
                        <h2>Workplace experience 2</h2>
                        <p>
                            Lorem ipsum stuff
                        </p>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src="" alt="place holder morgan stanley image"/>
                    </div>
                </div>
            </section>
        </>
    )
}