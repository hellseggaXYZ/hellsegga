import PlatzLogo from '@/svg/platz';
import PlatzLightLogo from '@/svg/platzLight';
import styles from './Platz.module.css'

export default function Platz() {
  return (
    <div className={styles.logo}>
      <div className={styles.image}>
        <PlatzLogo />
      </div>
      <div className={styles.gif}>
        <PlatzLightLogo />
      </div>
    </div>
  )
}