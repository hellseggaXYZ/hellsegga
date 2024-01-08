'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './MobileNav.module.css'
import BarsIcon from '@/svg/bars'
import XIcon from '@/svg/cross'

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <main className={styles.main}>
      <div className={styles.icon} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <XIcon /> : <BarsIcon />}
      </div>
      { isOpen && (
        <div className={styles.menu} onClick={() => setIsOpen(false)}>
          <Link href="/projects" className={`${styles.text} ${pathname === '/projects' ? styles.active : ''}`}>
            Projects
          </Link>
          <Link href="/design" className={`${styles.text} ${pathname === '/design' ? styles.active : ''}`}>
            Design
          </Link>
          <Link href="/people" className={`${styles.text} ${pathname === '/people' ? styles.active : ''}`}>
            People
          </Link>
          <Link href="/about" className={`${styles.text} ${pathname === '/about' ? styles.active : ''}`}>
            About
          </Link>
        </div>
      )}
    </main>
  )
}