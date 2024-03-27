import styles from './page.module.css'
import { people, urlMap } from '@/data/people'
import PersonCard from '@/components/PersonCard'

export default function Page() {

  const content = "a creative technologist studio for friends to work on fun side projects together."

  const words = content.split(" ")

  return (
    <main className={styles.main}>
      {words.map((word, index) => (
        <div className={styles.wordContainer} key={`${word}-${index}`}>
          <div className={styles.word}>
            {word}
          </div>
        </div>
      ))}
    </main>
  )
}
