import { Work } from '../types/models/core'
import { ProjectsReponse } from '../types/response'
const URL_API = 'https://api-porftfolio.up.railway.app/projects'
export const getWorks = async (): Promise<Work[]> => {
  const localProjects = localStorage.getItem('projects')

  if (localProjects) {
    return JSON.parse(localProjects) as Work[]
  }

  const res = await fetch(URL_API)
  const { body } = (await res.json()) as ProjectsReponse

  const projects = body.map(p => {
    const { _id, __v, ...restOfProject } = p

    return {
      id: _id,
      ...restOfProject,
    }
  })

  localStorage.setItem('projects', JSON.stringify(projects))
  return projects
}
