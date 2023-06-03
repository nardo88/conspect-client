export type ArticleEnum =
  | 'markdown'
  | 'text'
  | 'image'
  | 'video'
  | 'file'
  | 'frame'

export type BodyItem = {
  type: ArticleEnum
  value: string
  _id?: string
}

export type ArticleType = {
  _id?: string
  category: string
  title: string
  image?: string
  description?: string
  userId?: string
  updatedAt?: Date
  createdAt?: Date
  body: BodyItem[]
}
