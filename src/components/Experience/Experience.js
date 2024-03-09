import uniqid from 'uniqid'
import {experience } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import '../Projects/Projects.css'

const Experiences = () => {
  if (!experience.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Experiences</h2>

      <div className='projects__grid'>
        {experience.map((work) => (
          <ProjectContainer key={uniqid()} project={work} />
        ))}
      </div>
    </section>
  )
}

export default Experiences
