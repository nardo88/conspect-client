import javaScript from '../../assets/images/javaScript.jpg'
import typeScript from '../../assets/images/typeScript.jpg'
import nodeJS from '../../assets/images/nodeJS.jpg'
import react from '../../assets/images/react.jpg'
import redux from '../../assets/images/redux.jpg'
import nextJS from '../../assets/images/nextJS.jpg'
import linux from '../../assets/images/linux.jpg'
import mongoDB from '../../assets/images/mongoDB.jpg'
import docker from '../../assets/images/docker.jpg'
import vite from '../../assets/images/vite.jpg'
import webpack from '../../assets/images/webpack.jpg'
import css from '../../assets/images/css.jpg'
import postgreSQL from '../../assets/images/postgreSQL.jpg'
import fireBase from '../../assets/images/fireBase.png'
import webRtc from '../../assets/images/WEBRTC.png'
import test from '../../assets/images/jest.png'

export enum Categories {
  any = 'any',
  javaScript = 'javaScript',
  typeScript = 'typeScript',
  nodeJS = 'nodeJS',
  react = 'react',
  redux = 'redux',
  nextJS = 'nextJS',
  html = 'html',
  mobx = 'mobx',
  linux = 'linux',
  test = 'test',
  css = 'css',
  mongoDB = 'mongoDB',
  postgreSQL = 'postgreSQL',
  docker = 'docker',
  fireBase = 'fireBase',
  vue = 'vue',
  meteor = 'meteor',
  php = 'php',
  git = 'git',
  polifils = 'polifils',
  Plugins = 'Plugins',
  womanUP = 'womanUP',
  webpack = 'webpack',
  vite = 'vite',
  browserApi = 'browserApi',
  webRtc = 'webRtc',
}

interface ICategory {
  id: Categories
  title: string
}

const _categories: ICategory[] = [
  { id: Categories.any, title: 'Разное' },
  { id: Categories.javaScript, title: 'JavaScript' },
  { id: Categories.typeScript, title: 'TypeScript' },
  { id: Categories.nodeJS, title: 'NodeJS' },
  { id: Categories.react, title: 'React' },
  { id: Categories.redux, title: 'Redux' },
  { id: Categories.nextJS, title: 'NextJS' },
  { id: Categories.html, title: 'HTML' },
  { id: Categories.mobx, title: 'Mobx' },
  { id: Categories.linux, title: 'Linux' },
  { id: Categories.test, title: 'Тесты' },
  { id: Categories.css, title: 'CSS' },
  { id: Categories.mongoDB, title: 'MongoDB' },
  { id: Categories.postgreSQL, title: 'PostgreSQL' },
  { id: Categories.docker, title: 'Docker' },
  { id: Categories.fireBase, title: 'FireBase' },
  { id: Categories.vue, title: 'Vue' },
  { id: Categories.meteor, title: 'Meteor' },
  { id: Categories.php, title: 'PHP' },
  { id: Categories.git, title: 'Git' },
  { id: Categories.polifils, title: 'Polifils' },
  { id: Categories.Plugins, title: 'Plugins' },
  { id: Categories.womanUP, title: 'WomanUP' },
  { id: Categories.webpack, title: 'Webpack' },
  { id: Categories.vite, title: 'Vite' },
  { id: Categories.browserApi, title: 'Browser APIs' },
  { id: Categories.webRtc, title: 'Web RTC' },
]

export const categories = _categories.sort((a, b) =>
  a.title.localeCompare(b.title)
)

export const bodyVariants = [
  { id: 'text', title: 'Текст' },
  { id: 'image', title: 'Изображение' },
  { id: 'markdown', title: 'MarkDown' },
  { id: 'video', title: 'Видео' },
  { id: 'file', title: 'Файл' },
  { id: 'frame', title: 'Фрейм' },
  { id: 'code', title: 'Код' },
]

export const variantsTranslate = {
  text: 'Текст',
  image: 'Изображение',
  markdown: 'MarkDown',
  video: 'Видео',
  file: 'Файл',
  frame: 'Фрейм',
  code: 'Код',
}

export const covers: Partial<Record<Categories, string>> = {
  javaScript,
  typeScript,
  nodeJS,
  react,
  redux,
  nextJS,
  linux,
  mongoDB,
  docker,
  vite,
  webpack,
  css,
  postgreSQL,
  fireBase,
  webRtc,
  test,
}
