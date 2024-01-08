import LinearaLogo from '@/svg/lineara';
import styles from './Lineara.module.css'

export default function SpinningLineara() {
  return (
    <div className={styles.logo}>
      <div className={styles.image}>
        <LinearaLogo />
      </div>
    </div>
  )
}