import { designs } from '@/data/design'
import DesginCard from '@/components/DesignCard'
import styles from './page.module.css'

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.designsContainer}>
        {designs.map((design, index) => (
          <DesginCard key={`design-${index}-${design.name}`} design={design} />
        ))}
      </div>
    </main>
  )
}