import Logo from '@/svg/logo'
import Hero from '@/svg/hero'
import Link from 'next/link'

import styles from './page.module.css'


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <Hero />
      </div>
      <div className={styles.logo}>
        <Link href={'/projects'}>
          <Logo />
        </Link>
      </div>
    </main>
  )
}
