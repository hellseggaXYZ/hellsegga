import Link from "next/link";
import styles from './PersonCard.module.css';
import { designs } from "@/data/design";
import { projects } from "@/data/projects";

export default function PersonCard({ person }) {
  const { name, url, role } = person;

  // Loop through designs and projects to find projects that the person has worked on and append to projects array
  const designProjects = designs
    .filter(design => design.collaborators.some(collaborator => collaborator.name === name))
    .map(design => ({
      name: design.name,
      category: design.category,
      url: design.url
    }));

  const projectProjects = projects
    .filter(project => project.collaborators.some(collaborator => collaborator.name === name))
    .map(project => ({
      name: project.name,
      category: project.category,
      url: project.url
    }));

  const personProjects = [...projectProjects, ...designProjects];

  return (
    <div className={styles.card}>
      <div className={styles.name}>
        {url ? (
          <Link href={url} target="_blank" rel="noopener noreferrer">
            <div className={styles.nameText}>
              {name}
            </div>
          </Link>
        ) : (
          <div className={styles.nameText}>
            {name}
          </div>
        )}
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.projects}>
          {personProjects.map(project => (
            <div className={styles.project} key={`${name}-${project.name}`}>
              <div className={styles.projectName}>
                {project.name}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.role}>
          {role.join(', ')}
        </div>
      </div>
    </div>
  );
  
}
