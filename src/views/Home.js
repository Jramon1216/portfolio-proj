import React from "react";
import styles from '../styles/Home.module.scss'
import professionalPhoto from '../assets/img/professionalPhoto.png';

/**
    MY PROJECTS SECTION
    * TODO: MOVE TECH SKILLS INTO ABOUT ME CONTAINER 
    * TODO: FIND CLICK TO EXPAND DESIGN
    * TODO: START WORK ON CONTACT ME CONTAINER
    * Look into a light mode feature
*/

export default function Home() {
    return(
        <>
        <section id={styles.aboutMeContainer}>
            <div id={styles.aboutMeDiv}>
                <h2 id={styles.subHeading}>Hello my name is Jonathan Ramon</h2>
                <p id={styles.aboutMeText}>
                    Welcome to my webpage! I'm a dedicated Web/Software developer with nearly two years of experience seeking new opportunities in the field. 
                    My passion for coding drives me to continually expand my skill set by exploring various technologies. 
                    From mastering languages like JavaScript and frameworks like React to delving into backend development with Python Django, I thrive on learning and implementing new tools to enhance my abilities. 
                    With a strong foundation in web development, I am committed to delivering high-quality solutions and contributing effectively to projects. 
                    Explore my portfolio to see examples of my work and get in touch to discuss potential collaborations or job opportunities. 
                </p>
            </div>
            <div id={styles.skillsDiv}>
                <h2 id={styles.skillsSubheading}>Skills</h2>
                <code>SVG'S GO HERE</code>
                {
                    //https://www.svgrepo.com/
                }
            </div>
                <img src={professionalPhoto} id={styles.aboutMeImg} alt="Professional Photo of Jonathan Ramon"/>
        </section>
            <section id={styles.projectContianer}>
            <div>
                <h2>My Projects</h2>
                <details>
                    <summary>Sample Project</summary>
                    <table>
                        <tbody>
                            <tr className={styles.projectRow}>
                                <td><img src="https://placehold.co/300x200" className={styles.projImg} alt=""/></td>
                                <td>
                                    <p className={styles.projDesc}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Nulla facilisi. Integer feugiat, nisl vel ullamcorper vestibulum, tortor sapien tristique dolor, sit amet congue nisl quam vel augue.
                                        Sed consectetur, quam nec fringilla tincidunt, elit lectus laoreet erat, ut cursus ligula tortor in justo. 
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </details>
                <details>
                    <summary>Sample Project</summary>
                    <table>
                        <tbody>
                            <tr>
                                <td><img src="https://placehold.co/300x200" className={styles.projImg} alt=""/></td>
                                <td>
                                    <p className={styles.projDesc}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Nulla facilisi. Integer feugiat, nisl vel ullamcorper vestibulum, tortor sapien tristique dolor, sit amet congue nisl quam vel augue.
                                        Sed consectetur, quam nec fringilla tincidunt, elit lectus laoreet erat, ut cursus ligula tortor in justo. 
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </details>
                <details>
                    <summary>Sample Project</summary>
                    <table>
                        <tbody>
                            <tr >
                                <td><img src="https://placehold.co/300x200" className={styles.projImg} alt=""/></td>
                                <td>
                                    <p className={styles.projDesc}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Nulla facilisi. Integer feugiat, nisl vel ullamcorper vestibulum, tortor sapien tristique dolor, sit amet congue nisl quam vel augue.
                                        Sed consectetur, quam nec fringilla tincidunt, elit lectus laoreet erat, ut cursus ligula tortor in justo. 
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </details> 
            </div>
           
        </section>
        <section>
        </section>
        </>
    )
}