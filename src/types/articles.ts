export type BodyItem = {
    type: string
    value: string
}

export type ArticleType = {
    category: string
    theme: string
    title: string
    body: BodyItem[]
  }