import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.css'

export default function NavBar(){
    return (
        <div >       
            <nav className={styles.navbar}>   
                <ul>
                <li> <NavLink to="/Home">Home</NavLink></li>
                {/* <li> <NavLink exact to="/Contact">Contact</NavLink></li> */}
                <li className={styles.createAct}> <NavLink to={`/LoadActivity`}>Activities</NavLink></li>
                <li> <NavLink exact to="/About">About</NavLink></li>
                <h3 className={styles.title}>REST App Countries</h3>
                </ul> 
            </nav>
        </div>
        
    )
}

