import React from "react";
import styles from '../styles/Home.module.scss'

/**
                                    MY PROJECTS SECTION
 * In the future consider making the projects section a child component of Home 
 * Maybe the Homepage can have 3 of your best projects and a link to the rest of the list in a seperate component
 * Animations for toggling the details elements would be nice
*/

/**
 *  TODO: Finish adding class names for the rest of the elements
 *  TODO: Finish structure styling for the Skills and My Projects sections 
 *
 */

export default function Home() {
    return(
        <>
        <section>
            <div className={styles.aboutMeContainer}>
                <h2 className={styles.subHeading}>Hello my name is Jonathan Ramon</h2>
                <p className={styles.articleText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nulla facilisi. Integer feugiat, nisl vel ullamcorper vestibulum, tortor sapien tristique dolor, sit amet congue nisl quam vel augue.
                    Sed consectetur, quam nec fringilla tincidunt, elit lectus laoreet erat, ut cursus ligula tortor in justo. 
                    Proin a justo sed ex bibendum hendrerit. Duis vulputate urna in justo facilisis, vel laoreet quam sollicitudin. 
                    Sed non neque id augue fermentum interdum. Nunc pharetra justo id sapien iaculis, eu congue eros fermentum. 
                    In hac habitasse platea dictumst. Vivamus nec ex vel neque eleifend auctor ac sed leo. 
                    Ut ut mauris vitae mi volutpat suscipit.Quisque vitae felis in velit rhoncus feugiat eu id orci. Sed quis fermentum justo.
                </p>
            </div>
        </section>
        <section>
            <div className={styles.projectSection}>
                <h2>My Projects</h2>
                <details>
                    <summary>Sample Project</summary>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nulla facilisi. Integer feugiat, nisl vel ullamcorper vestibulum, tortor sapien tristique dolor, sit amet congue nisl quam vel augue.
                    Sed consectetur, quam nec fringilla tincidunt, elit lectus laoreet erat, ut cursus ligula tortor in justo. </p>
                </details>
                <details>
                    <summary>Sample Project</summary>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nulla facilisi. Integer feugiat, nisl vel ullamcorper vestibulum, tortor sapien tristique dolor, sit amet congue nisl quam vel augue.
                    Sed consectetur, quam nec fringilla tincidunt, elit lectus laoreet erat, ut cursus ligula tortor in justo. </p>
                </details>
                <details>
                    <summary>Sample Project</summary>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nulla facilisi. Integer feugiat, nisl vel ullamcorper vestibulum, tortor sapien tristique dolor, sit amet congue nisl quam vel augue.
                    Sed consectetur, quam nec fringilla tincidunt, elit lectus laoreet erat, ut cursus ligula tortor in justo. </p>
                </details>
            </div>
        </section>
            <h2>Skills</h2>
            <code>SVG'S GO HERE</code>
        </>
    )
}