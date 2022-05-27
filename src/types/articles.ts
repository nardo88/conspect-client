export type ArticleEnum = 'markdown' | 'text' | 'image' | 'video' | 'file'

export type BodyItem = {
    type: ArticleEnum
    value: string
    _id?: string
}

export type ArticleType = {
    category: string
    title: string
    userId?: string
    updatedAt?: Date
    createdAt?: Date
    body: BodyItem[]
  }
