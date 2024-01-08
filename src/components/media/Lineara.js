import LinearaLogo from '@/svg/lineara';
import styles from './Lineara.module.css'

export default function Lineara() {
  return (
    <div className={styles.logo}>
      <div className={styles.image}>
        <LinearaLogo />
      </div>
    </div>
  )
}