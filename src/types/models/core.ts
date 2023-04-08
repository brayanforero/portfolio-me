export interface Work {
  title: string
  description: string
  preview: string | null
  repo: string | null
  cover: string
  meta?: Meta | null
}

interface Meta {
  company: string
  startAt: Date
  endAt: Date
}

export interface Skill {
  name: string
  icon: string
}
