import { type Skill } from '@/types'

export interface AppStateValue {
  skills: Skill[]
}

export const AppState: AppStateValue = {
  skills: [
    {
      name: 'Typescript',
      icon: 'bx bxl-typescript'
    },
    {
      name: 'React',
      icon: 'bx bxl-react'
    },
    {
      name: 'Angular',
      icon: 'bx bxl-angular'
    },
    {
      name: 'Redux',
      icon: 'bx bxl-redux'
    },
    {
      name: 'Tailwind',
      icon: 'bx bxl-tailwind-css'
    }
  ]
}
