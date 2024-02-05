import React from 'react'
import styles from '../styles/Projects.module.scss'

export default function Projects(){
    return(
        <>
            <h1>My Projects</h1>
            <section className={styles.projectEntry}>
                <div className={styles.textContainer}>
                    <h2>Project</h2>
                    <p>
                        Lorem ipsum stuff
                    </p>
                </div>
                <div className={styles.imageContainer}>
                    <img src="" alt="some project image"/>
                </div>
                <div className={styles.svgLogos}>
                    <img src="" alt='svg logos'/>
                </div>
            </section>
        </>
    )
}