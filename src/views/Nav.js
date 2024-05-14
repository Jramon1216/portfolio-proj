import React from 'react'
import { NavLink } from 'react-router-dom';

import styles from'../styles/Nav.module.scss'

/**
 * Consider adding NavLink so the nav bar can reflect where in the user is visually 
 * Typing animation for your name - https://github.com/ssbeefeater/react-typed
 */

export default function Nav(){
    return(
        <header>
            <nav>
                <h1>Jonathan Ramon</h1>
                <ul>
                    <li><NavLink exact activeClassName={styles.activeLink} className={styles.linkStyles} to="portfolio-proj/home">Home</NavLink></li>
                    <li><NavLink activeClassName={styles.activeLink} className={styles.linkStyles} to="portfolio-proj/projects">Projects</NavLink></li>
                    <li><NavLink activeClassName={styles.activeLink} className={styles.linkStyles} to="portfolio-proj/contact">Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}