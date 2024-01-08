import styles from './page.module.css'
import { people, urlMap } from '@/data/people'
import PersonCard from '@/components/PersonCard'

export default function Page() {

  // derive user data from projects and designs
  // user data: name, url, role (engineer or design), 
  // iterate through projects and designs and populate poject fields of people

  return (
    <main className={styles.main}>
      {people.map(person => (
        <PersonCard person={person} key={person.name} />
      ))}
    </main>
  )
}
