'use client'

import styles from './Navbar.module.css'
import Link from 'next/link'
import LogoBorderless from '@/svg/logoBorderless'
import { usePathname } from 'next/navigation'

export default function Navbar() {

  const pathname = usePathname()

  return (
    <main className={styles.main}>
      <Link href="/projects" className={`${styles.text} ${pathname === '/projects' ? styles.active : ''}`}>
        Projects
      </Link>
      <Link href="/design" className={`${styles.text} ${pathname === '/design' ? styles.active : ''}`}>
        Design
      </Link>
      <Link href="/" className={styles.logo}>
        <LogoBorderless />
      </Link>
      <Link href="/people" className={`${styles.text} ${pathname === '/people' ? styles.active : ''}`}>
        People
      </Link>
      <Link href="/about" className={`${styles.text} ${pathname === '/about' ? styles.active : ''}`}>
        About
      </Link>
    </main>
  )
}