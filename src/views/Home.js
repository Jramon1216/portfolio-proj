import React from "react";
import styles from '../styles/Home.module.scss'
import professionalPhoto from '../assets/img/professionalPhoto.png';
import Projects from "./Projects";
import Contact from "./Contact";

/**
    MY PROJECTS SECTION
    * Look into a light mode feature (low priority)
*/

export default function Home() {
    return (
        <>
            <section id={styles.aboutMeContainer}>
                <div id={styles.aboutMeDiv}>
                    <h2 className={styles.subHeading}>Hello my name is Jonathan Ramon</h2>
                    <p id={styles.aboutMeText}>
                        Welcome to my webpage! I'm a dedicated Web/Software developer with nearly two years of experience seeking new opportunities in the field.
                        My passion for coding drives me to continually expand my skill set by exploring various technologies.
                        From mastering languages like JavaScript and frameworks like React to delving into backend development with Python Django, I thrive on learning and implementing new tools to enhance my abilities.
                        With a strong foundation in web development, I am committed to delivering high-quality solutions and contributing effectively to projects.
                        Explore my portfolio to see examples of my work and get in touch to discuss potential collaborations or job opportunities.
                    </p>
                    <h2 className={styles.subHeading}>Skills</h2>
                    <code>SVG'S GO HERE</code>
                    {
                        /*
                            Django - https://www.svgrepo.com/svg/508908/django
                            React  - https://www.svgrepo.com/svg/521303/react-16
                            Figma  - https://www.svgrepo.com/svg/532271/figma
                            SQL  - https://www.svgrepo.com/svg/392345/extension-file-format-sql-document-file-format 
                            SCSS - https://www.svgrepo.com/svg/374068/scss
                            PostgreSQL - https://www.svgrepo.com/svg/473760/postgresql
                            Docker - https://www.svgrepo.com/svg/521276/docker-16
                            Angular - https://www.svgrepo.com/svg/368493/angular
                            Java - https://www.svgrepo.com/svg/449120/java
                            Git - https://www.svgrepo.com/svg/509966/git
                        */
                    }
                </div>
                <img src={professionalPhoto} id={styles.aboutMeImg} alt="Professional Photo of Jonathan Ramon" />
            </section>
            <section id={styles.projectsContainter}>
                <h2 className={styles.subHeading} id={styles.projectsSubheading}>My Projects</h2>
                <Projects />
            </section>
            <section id={styles.contactMeContainer}>
                <Contact/>
            </section>

        </>
    )
}