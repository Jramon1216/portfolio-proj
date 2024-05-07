import React from 'react'
import styles from '../styles/Projects.module.scss'

export default function Projects(){
    return(
        <>
            <h1>My Projects</h1>
            <section>
                <div className={styles.projectIntro}>
                    <h2>Projects I've worked on</h2>
                    {/* <p>Lorem ipsum stuff</p> */}
                </div>
            </section>
            <section className={styles.projectEntry}>
                <h2>Project</h2>
                <div className={styles.textContainer}>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nulla facilisi. Integer feugiat, nisl vel ullamcorper vestibulum, tortor sapien tristique dolor, sit amet congue nisl quam vel augue.
                    Sed consectetur, quam nec fringilla tincidunt, elit lectus laoreet erat, ut cursus ligula tortor in justo. 
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