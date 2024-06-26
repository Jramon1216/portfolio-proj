import React from "react";
import styles from '../styles/Home.module.scss'

/**
                                    MY PROJECTS SECTION
 * In the future consider making the projects section a child component of Home 
 * Maybe the Homepage can have 3 of your best projects and a link to the rest of the list in a seperate component
 * Look into a dark mode feature 
*/

/**
 *
 */

export default function Home() {
    return(
        <>
            <img src="https://placehold.co/1000x400" className={styles.aboutMeImg} alt=""/>
        <section>
            <div className={styles.aboutMeContainer}>
                <h2 className={styles.subHeading}>Hello my name is Jonathan Ramon</h2>
                <p className={styles.aboutMeText}>
                    Welcome to my webpage! I'm a dedicated web/software developer with nearly two years of experience seeking new opportunities in the field. 
                    My passion for coding drives me to continually expand my skill set by exploring various technologies. 
                    From mastering languages like JavaScript and frameworks like React to delving into backend development with Python Django, I thrive on learning and implementing new tools to enhance my abilities. 
                    With a strong foundation in web development, I am committed to delivering high-quality solutions and contributing effectively to projects. 
                    Explore my portfolio to see examples of my work and get in touch to discuss potential collaborations or job opportunities. 
                </p>
            </div>
        </section>
        <section>
            <div className={styles.projectSection}>
                <h2>My Projects</h2>
                <details>
                    <summary>Sample Project</summary>
                    <table>
                        <tbody>
                            <td><img src="https://placehold.co/300x200" className={styles.projImg} alt=""/></td>
                            <td>
                                <p className={styles.projDesc}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Nulla facilisi. Integer feugiat, nisl vel ullamcorper vestibulum, tortor sapien tristique dolor, sit amet congue nisl quam vel augue.
                                    Sed consectetur, quam nec fringilla tincidunt, elit lectus laoreet erat, ut cursus ligula tortor in justo. 
                                </p>
                            </td>
                        </tbody>
                    </table>
                </details>
                <details>
                    <summary>Sample Project</summary>
                    <table>
                        <tbody>
                            <td><img src="https://placehold.co/300x200" className={styles.projImg} alt=""/></td>
                            <td>
                                <p className={styles.projDesc}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Nulla facilisi. Integer feugiat, nisl vel ullamcorper vestibulum, tortor sapien tristique dolor, sit amet congue nisl quam vel augue.
                                    Sed consectetur, quam nec fringilla tincidunt, elit lectus laoreet erat, ut cursus ligula tortor in justo. 
                                </p>
                            </td>
                        </tbody>
                    </table>
                </details>
                <details>
                    <summary>Sample Project</summary>
                    <table>
                        <tbody>
                            <td><img src="https://placehold.co/300x200" className={styles.projImg} alt=""/></td>
                            <td>
                                <p className={styles.projDesc}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Nulla facilisi. Integer feugiat, nisl vel ullamcorper vestibulum, tortor sapien tristique dolor, sit amet congue nisl quam vel augue.
                                    Sed consectetur, quam nec fringilla tincidunt, elit lectus laoreet erat, ut cursus ligula tortor in justo. 
                                </p>
                            </td>
                        </tbody>
                    </table>
                </details>
            </div>
        </section>
        <section>
            <div>
                
            </div>
        </section>
        <section>
            
        </section>
        <section>
            <div>
                <h2>Skills</h2>
                <code>SVG'S GO HERE</code>
                {
                    //https://www.svgrepo.com/
                }
            </div>
        </section>
        </>
    )
}