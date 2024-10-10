import { type AppLangConfig } from '@/types'

export const initialLang: AppLangConfig = {
  hero: {
    title: '',
    description: ''
  },
  navigation: {
    projects: '',
    aboutMe: '',
    cv: '',
    home: ''
  },
  aboutSection: { title: '', copy: [] },
  contact: { title: '' },
  experience: { title: '', copy: '' }
}

export const PROJECTS =
  [
    {
      title: "Flujos Automatizados con PowerAutomate (flow)",
      description: "Forme parte del desarrollo y mantenimiento de más de 4+ flujos en los que se me delego poder automatizar tareas como envios de correos, notifaciones programadas, consumos de APIS de sharepoint, entre otros. Demo no disponibles por motivos de confidencilidad. CCO Systems (May 2021 - May 2022).",
      preview: null,
      repo: null,
      cover: "http://store-images.s-microsoft.com/image/apps.24143.13592668300764735.55b49f05-a58f-437f-95f4-f51ea7542976.f30e5790-6318-41e4-86ef-6b813b3b2a17"
    },
    {
      title: "Gestion Documental",
      description: "App de gestión documental desarrollada en angular en la empresa CCO Systems, donde se desarrollé nuevas features, refactorizar y debbugear algunas partes del código. Este proyecto es privado y por confidencialiad no tiene demo. CCO Systems (Nov 2021 - May 2022).",
      preview: null,
      repo: null,
      cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/240px-Angular_full_color_logo.svg.png"
    },
    {
      title: "Mopics",
      description: "Buscador que te permite explorar gif desde una busqueda sencilla o por categorias",
      preview: "https://landing-normalize.vercel.app/",
      repo: "https://github.com/brayanforero/landing-normalize/",
      cover: "https://repository-images.githubusercontent.com/506754706/affd6c0a-c0a7-4a81-a833-6c07504edb8a"
    },
    {
      title: "Normalize Clone",
      description: "Proyecto personal donde desarrolle skills de maquetación web.",
      preview: "https://landing-normalize.vercel.app/",
      repo: "https://github.com/brayanforero/landing-normalize/",
      cover: "https://repository-images.githubusercontent.com/418251932/72b9486a-e13f-4b99-8e6e-317270efb7da"
    },
    {
      title: "Telegram Static Chat Clone",
      description: "Proyecto personal para desarrollar skills sobre el manejo de layouts y posicionamiento.",
      preview: "https://telegram-static-chat.vercel.app/",
      repo: "https://github.com/brayanforero/telegram-static-chat",
      cover: "https://repository-images.githubusercontent.com/451166195/4087b6cc-33ab-4a94-b146-9c55037e5649"
    }
  ]


