export type BodyItem = {
    type: string
    value: string
}

export type ArticleType = {
    category: string
    title: string
    body: BodyItem[]
  }