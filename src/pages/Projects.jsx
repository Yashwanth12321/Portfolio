import React from 'react'
import { projects } from '../constants'

const Projects = () => {
  return (
    <section className="max-container">
    <h1 className="head-text">
      <span className='blue-gradient_text font-semibold drop-shadow'>
        PROJECTS
      </span>

    </h1>
    <div className='mt-5 flex flex-col gap-3 text-slate-500'>
      <p> i like developing cool application whenever i am free.</p>
    </div>

    <div className='flex flex-wrap my-20 gap-16'>
      {projects.map((project)=>(
        <div className='w-1/2'>
          <div className={`btn-back ${project.theme} rounded-xl`}>
            <img  
              src={project.iconUrl}
              alt={project.name}
              className='w-1/2 h-1/2 object-contain rounded-full'
            />
          </div>
          <h3 className='subhead-text mt-5'>{project.name}</h3>
          <p className='text-slate-500'>{project.description}</p>
          <a 
            href={project.link}
            target='_blank'
            rel='noreferrer'
            className='text-blue-500 hover:underline'
          >
            View on GitHub
          </a>
        </div>
      ))}
    </div>
    </section >
  )
}

export default Projects
