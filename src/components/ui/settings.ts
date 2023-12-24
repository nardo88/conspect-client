const _categories = [
  { id: 'any', title: 'Разное' },
  { id: 'javaScript', title: 'JavaScript' },
  { id: 'typeScript', title: 'TypeScript' },
  { id: 'nodeJS', title: 'NodeJS' },
  { id: 'react', title: 'React' },
  { id: 'redux', title: 'Redux' },
  { id: 'nextJS', title: 'NextJS' },
  { id: 'html', title: 'HTML' },
  { id: 'mobx', title: 'Mobx' },
  { id: 'linux', title: 'Linux' },
  { id: 'test', title: 'Тесты' },
  { id: 'css', title: 'CSS' },
  { id: 'mongoDB', title: 'MongoDB' },
  { id: 'postgreSQL', title: 'PostgreSQL' },
  { id: 'docker', title: 'Docker' },
  { id: 'fireBase', title: 'FireBase' },
  { id: 'vue', title: 'Vue' },
  { id: 'meteor', title: 'Meteor' },
  { id: 'php', title: 'PHP' },
  { id: 'git', title: 'Git' },
  { id: 'polifils', title: 'Polifils' },
  { id: 'Plugins', title: 'Plugins' },
  { id: 'womanUP', title: 'WomanUP' },
  { id: 'webpack', title: 'Webpack' },
  { id: 'vite', title: 'Vite' },
  { id: 'browser-api', title: 'Browser APIs' },
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
]

export const variantsTranslate = {
  text: 'Текст',
  image: 'Изображение',
  markdown: 'MarkDown',
  video: 'Видео',
  file: 'Файл',
  frame: 'Фрейм',
}
