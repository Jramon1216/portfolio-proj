import React, { memo } from 'react'
import { Link } from 'react-scroll'

import styles from '../styles/Nav.module.scss'
import homeStyles from '../styles/Home.module.scss'

/**
 * Typing animation for your name - https://github.com/ssbeefeater/react-typed
 */

function Nav(){

    return(
        <header>
            <nav>
                <h1>Jonathan Ramon</h1>
                <ul>
                    <li>
                        <Link
                        to={homeStyles.aboutMeContainer}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500} 
                        className={styles.linkStyles} 
                        >
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link
                        to={homeStyles.projectsContainer}
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500} 
                        className={styles.linkStyles} 
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                        to={homeStyles.contactMeContainer}
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        className={styles.linkStyles} 
                        >
                            Contact
                        </Link>
                    </li>

                </ul>
            </nav>
        </header>
    )
};

export default memo(Nav);