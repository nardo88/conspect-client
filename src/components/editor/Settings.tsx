import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ArticleType } from '../../types/articles'
import { DefaultOptions } from '../../types/default.options'
import Input from '../ui/Input'
import Select from '../ui/Select'
import { categories } from '../ui/settings'
import AddFile from './AddFile'

type SettingsType = {
  article: ArticleType
  setArticle: (value: ArticleType) => void
}

const Settings: React.FC<SettingsType> = ({ article, setArticle }) => {
  const [category, setCategory] = useState<null | DefaultOptions>(null)

  useEffect(() => {
    if (article.category) {
      const cat = categories.find(
        (item: DefaultOptions) => item.id === article.category
      )
      setCategory(cat || null)
    }
  }, [article])

  return (
    <div>
      <FormItem>
        <Select
          value={category}
          onChange={(value: DefaultOptions) => {
            setCategory(value)
            setArticle({ ...article, category: value.id })
          }}
          options={categories}
          label="Выберите категорию"
        />
      </FormItem>

      <FormItem>
        <Input
          value={article.title}
          onChange={(text: string) => {
            setArticle({ ...article, title: text })
          }}
          label="Укажите заголовок"
        />
      </FormItem>

      <FormItem>
        <Input
          value={article?.description || ''}
          onChange={(text: string) => {
            setArticle({ ...article, description: text })
          }}
          label="Краткое описание статьи"
        />
      </FormItem>

      <FormItem>
        <AddFile
          label={'Обложка'}
          type="image"
          url={article?.image || ''}
          onChange={(text: string) => {
            setArticle({ ...article, image: text })
          }}
        />
      </FormItem>
    </div>
  )
}

export default Settings

const FormItem = styled.div`
  max-width: 650px;
  margin-bottom: 30px;
`
