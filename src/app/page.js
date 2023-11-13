import Logo from '@/svg/logo'
import Hero from '@/svg/hero'

import styles from './page.module.css'


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <Hero />
      </div>
      <div className={styles.logo}>
        <Logo />
      </div>
    </main>
  )
}