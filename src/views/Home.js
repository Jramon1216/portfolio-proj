import React from "react";
import styles from '../styles/Home.module.scss'
import professionalPhoto from '../assets/img/professionalPhoto.png';
import Projects from "./Projects";
import Contact from "./Contact";
import angSVG from "../assets/svg/angular-svgrepo-com.svg";
import azuredevopsSVG from "../assets/svg/azuredevops.svg"
import djSVG from "../assets/svg/django-svgrepo-com.svg";
import dockSVG from "../assets/svg/docker-16-svgrepo-com.svg";
import dotnetSVG from "../assets/svg/dotnet.svg";
import figmaSVG from "../assets/svg/figma-svgrepo-com.svg";
import gitSVG from "../assets/svg/git-svgrepo-com.svg";
import postSVG from "../assets/svg/postgresql-svgrepo-com.svg";
import reactSVG from "../assets/svg/react-16-svgrepo-com.svg";
import scssSVG from "../assets/svg/scss-svgrepo-com.svg";
import snowflakeSVG from "../assets/svg/SNOW.svg";
import ssmsSVG from "../assets/svg/msqls.svg";
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

                        I am a results-oriented Full Stack Developer with a solid foundation in cloud computing and software development.
                        Skilled in front and backend development, I specialize in creating scalable, reliable, and efficient solutions that drive user engagement and streamline data retrieval.
                        In my recent roles, I’ve successfully managed weekly releases using Azure DevOps, lead daily scrums, developed frontend features with React, engineered backend solutions with Django and FastAPI, managed databases using SQL Server and Snowflake, and gained experience working on applications using the .NET framework, which have enhanced application performance and user satisfaction.
                        My expertise extends across various technologies which I am passionate about extending my experience with, as well as learning new technologies to strengthen my skills as a developer.

                    </p>
                    <h2 className={styles.subHeading}>Skills</h2>
                    {/** 
                     //  ? SVG divs are getting too long, maybe turn it into a component ?
                    */}
                    <div id={styles.skillsSVGContainer}> {/* First row of SVG skills*/}
                        <Tooltip title="Django" arrow> 
                            <img src={djSVG} className={styles.skillSVG} alt="Python Django" />
                        </Tooltip>
                        <Tooltip title="React" arrow>
                            <img src={reactSVG} className={styles.skillSVG} alt="React" />
                        </Tooltip>
                        <Tooltip title="Figma" arrow>
                            <img src={figmaSVG} className={styles.skillSVG} alt="Figma" />
                        </Tooltip>
                        <Tooltip title="Snowflake" arrow>
                            <img src={snowflakeSVG} className={styles.skillSVG} alt="Snowflake" />
                        </Tooltip>
                        <Tooltip title="SASS" arrow>
                            <img src={scssSVG} className={styles.skillSVG} alt="SASS" />
                        </Tooltip>
                        <Tooltip title="PostgreSQL" arrow>
                            <img src={postSVG} className={styles.skillSVG} alt="PostgreSQL" />
                        </Tooltip>
                        <Tooltip title="Docker" arrow>
                            <img src={dockSVG} className={styles.skillSVG} alt="Docker" />
                        </Tooltip>
                        <Tooltip title="Angular" arrow>
                            <img src={angSVG} className={styles.skillSVG} alt="Angular" />
                        </Tooltip>
                        <Tooltip title=".NET" arrow>
                            <img src={dotnetSVG} className={styles.skillSVG} alt=".NET" />
                        </Tooltip>
                        <Tooltip title="Git" arrow>
                            <img src={gitSVG} className={styles.skillSVG} alt="Git" />
                        </Tooltip>
                    </div>
                    <div id={styles.skillsSVGContainer}> {/* Second row of SVG skills*/}
                        <Tooltip title="Azure DevOps" arrow>
                            <img src={azuredevopsSVG} className={styles.skillSVG} alt="Azure DevOps" />
                        </Tooltip>
                        <Tooltip title="SQL Server/SSMS" arrow>
                            <img src={ssmsSVG} className={styles.skillSVG} alt="SQL Server/SSMS"/>
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