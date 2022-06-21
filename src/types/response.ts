export interface ProjectReponse {
  _id: string
  title: string
  description: string
  preview: string | null
  repo: string | null
  cover: string
  __v: number
}

export interface ProjectsReponse {
  status: number
  body: ProjectReponse[]
}
