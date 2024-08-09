import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>
        <Link href='/'>To Home</Link>
    </nav>
  )
}

export default Navbar