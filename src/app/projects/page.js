import styles from './page.module.css'
import { projects } from '@/data/projects'
import LogoBorderless from '@/svg/logoBorderless'
import ProjectCard from '@/components/projectCard'

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.logo}>
        <LogoBorderless />
      </div>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} project={project} />
        ))}
      </div>
    </main>
  )
}
