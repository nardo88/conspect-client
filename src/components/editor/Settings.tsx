import { useState } from 'react'
import styled from 'styled-components'
import { ArticleType } from '../../types/articles'
import { DefaultOptions } from '../../types/default.options'
import Input from '../ui/Input'
import Select from '../ui/Select'
import { categories, themes } from '../ui/settings'

type SettingsType = {
  acticle: ArticleType
  setArticle: (value: ArticleType) => void
}

const Settings: React.FC<SettingsType> = ({ acticle, setArticle }) => {
  const [category, setCategory] = useState<null | DefaultOptions>(null)
  const [theme, setThemes] = useState<null | DefaultOptions>(null)
  const [title, setTitle] = useState('')

  return (
    <div>
      <FormItem>
        <Select
          value={category}
          onChange={setCategory}
          options={categories}
          label="Выберите категорию"
        />
      </FormItem>

      {category && category?.id !== 'main' && (
        <FormItem>
          <Select
            value={theme}
            onChange={setThemes}
            options={themes}
            label="Выберите категорию"
          />
        </FormItem>
      )}

      <FormItem>
        <Input value={title} onChange={setTitle} label="Укажите заголовок" />
      </FormItem>
    </div>
  )
}

export default Settings

const FormItem = styled.div`
  max-width: 650px;
  margin-bottom: 30px;
`
