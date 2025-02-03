import React from "react";
import styles from '../styles/Home.module.scss'
import professionalPhoto from '../assets/img/professionalPhoto.png';
import Projects from "./Projects";
import Contact from "./Contact";
import djSVG from "../assets/svg/django-svgrepo-com.svg";
import reactSVG from "../assets/svg/react-16-svgrepo-com.svg";
import figmaSVG from "../assets/svg/figma-svgrepo-com.svg";
import sqlSVG from "../assets/svg/sql-svgrepo-com.svg";
import scssSVG from "../assets/svg/scss-svgrepo-com.svg";
import postSVG from "../assets/svg/postgresql-svgrepo-com.svg";
import dockSVG from "../assets/svg/docker-16-svgrepo-com.svg";
import angSVG from "../assets/svg/angular-svgrepo-com.svg";
import javaSVG from "../assets/svg/java-svgrepo-com.svg";
import gitSVG from "../assets/svg/git-svgrepo-com.svg";
import Tooltip from '@mui/material/Tooltip';

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
                        Welcome to my webpage!

                        I am a results-oriented Full Stack Web Developer with a solid foundation in cloud computing and software development.
                        Skilled in front and backend development, I specialize in creating scalable, reliable, and efficient solutions that drive user engagement and streamline data retrieval.
                        In my recent roles, I’ve successfully managed bi-weekly releases, developed frontend features with React, and engineered backend solutions with Django, which have enhanced application performance and user satisfaction.
                        With an AWS Cloud Practitioner certification, I bring hands-on experience in deploying scalable applications on the cloud and managing resources to maximize performance.
                        My expertise extends across various technologies, including React, Django, and AWS, and I'm passionate about implementing strategies that reduce post-deployment issues and ensure the highest code quality.

                    </p>
                    <h2 className={styles.subHeading}>Skills</h2>
                    <div id={styles.skillsSVGContainer}>
                        <Tooltip title="Django" arrow> 
                            <img src={djSVG} className={styles.skillSVG} alt="Python Django" />
                        </Tooltip>
                        <Tooltip title="React" arrow>
                            <img src={reactSVG} className={styles.skillSVG} alt="React" />
                        </Tooltip>
                        <Tooltip title="Figma" arrow>
                            <img src={figmaSVG} className={styles.skillSVG} alt="Figma" />
                        </Tooltip>
                        <Tooltip title="SQL" arrow>
                            <img src={sqlSVG} className={styles.skillSVG} alt="SQL" />
                        </Tooltip>
                        <Tooltip title="SASS" arrow>
                            <img src={scssSVG} className={styles.skillSVG} alt="" />
                        </Tooltip>
                        <Tooltip title="PostgreSQL" arrow>
                            <img src={postSVG} className={styles.skillSVG} alt="" />
                        </Tooltip>
                        <Tooltip title="Docker" arrow>
                            <img src={dockSVG} className={styles.skillSVG} alt="" />
                        </Tooltip>
                        <Tooltip title="Angular" arrow>
                            <img src={angSVG} className={styles.skillSVG} alt="" />
                        </Tooltip>
                        <Tooltip title="Java" arrow>
                            <img src={javaSVG} className={styles.skillSVG} alt="" />
                        </Tooltip>
                        <Tooltip title="Git" arrow>
                            <img src={gitSVG} className={styles.skillSVG} alt="" />
                        </Tooltip>
                    </div>
                    <p className={styles.subHeading} style={{ textDecoration: 'None' }}>With many more to come!</p>
                </div>
                <img src={professionalPhoto} id={styles.aboutMeImg} alt="Professional Photo of Jonathan Ramon" />
            </section>
            <section id={styles.projectsContainer}>
                <h2 className={styles.subHeading} id={styles.projectsSubheading}>My Projects</h2>
                <Projects />
            </section>
            <section id={styles.contactMeContainer}>
                <Contact />
            </section>

        </>
    )
}