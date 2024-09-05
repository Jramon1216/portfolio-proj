import React, { memo } from 'react'
import { NavLink } from 'react-router-dom';

import styles from'../styles/Nav.module.scss'

/**
 * Typing animation for your name - https://github.com/ssbeefeater/react-typed
 */

function Nav(){
    return(
        <header>
            <nav>
                <h1>Jonathan Ramon</h1>
                <ul>
                    <li><NavLink end style={({isActive}) => ({backgroundColor: isActive ? '#FF1342': 'black'})} className={styles.linkStyles} to="portfolio-proj/home">Home</NavLink></li>
                    <li><NavLink style={({isActive}) => ({backgroundColor: isActive ? '#FF1342': 'black'})} className={styles.linkStyles} to="portfolio-proj/projects">Projects</NavLink></li>
                    <li><NavLink style={({isActive}) => ({backgroundColor: isActive ? '#FF1342': 'black'})} className={styles.linkStyles} to="portfolio-proj/contact">Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    )
};

export default memo(Nav);