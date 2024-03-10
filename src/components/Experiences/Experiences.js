import uniqid from 'uniqid'
import {experiences } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import '../Projects/Projects.css'
import '../Experiences/Experiences.css'

const Experiences = () => {
  if (!experiences.length) return null

  return (
    <section id='experiences' className='section projects'>
      <h2 className='section__title'>Experiences</h2>

      <div className='experiences__grid'>
        {experiences.map((work) => (
          <ProjectContainer key={uniqid()} project={work} />
        ))}
      </div>
    </section>
  )
}

export default Experiences
