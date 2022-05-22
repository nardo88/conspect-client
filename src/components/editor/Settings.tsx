import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ArticleType } from '../../types/articles'
import { DefaultOptions } from '../../types/default.options'
import Input from '../ui/Input'
import Select from '../ui/Select'
import { categories } from '../ui/settings'

type SettingsType = {
  acticle: ArticleType
  setArticle: (value: ArticleType) => void
}

const Settings: React.FC<SettingsType> = ({ acticle, setArticle }) => {
  const [category, setCategory] = useState<null | DefaultOptions>(null)

  useEffect(() => {
    if (acticle.category) {
      const cat = categories.find((item: DefaultOptions) => item.id === acticle.category)
      setCategory(cat || null)
    }
  }, [acticle])

  return (
    <div>
      <FormItem>
        <Select
          value={category}
          onChange={(value: DefaultOptions) => {
            setCategory(value)
            setArticle({ ...acticle, category: value.id })
          }}
          options={categories}
          label="Выберите категорию"
        />
      </FormItem>

      <FormItem>
        <Input
          value={acticle.title}
          onChange={(text: string) => {
            setArticle({ ...acticle, title: text })
          }}
          label="Укажите заголовок"
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
