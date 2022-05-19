import { useState } from 'react'
import styled from 'styled-components'
import { ArticleType } from '../../types/articles'
import Select from '../ui/Select'
import { category } from '../ui/settings'

type SettingsType = {
  acticle: ArticleType
  setArticle: (value: ArticleType) => void
}

type OptionItem = {
    id: string
    title: string
  }

const Settings: React.FC<SettingsType> = ({ acticle, setArticle }) => {
  const [select, setSelect] = useState<null | OptionItem>(null)


  return (
    <div>
      <FormItem>
        <Select value={select} onChange={setSelect} options={category} label="Выберите категорию" />
      </FormItem>
    </div>
  )
}

export default Settings

const FormItem = styled.div`
    max-width: 650px;
    margin-bottom: 30px;
`
