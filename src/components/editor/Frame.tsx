import { RemoveBtn } from '../ui/components'
import { variantsTranslate } from '../ui/settings'
import { Wrapper } from './AddFile'
import Input from '../ui/Input'
import { ArticleEnum } from '../../types/articles'

type PropsType = {
  type: ArticleEnum
  onChange: (value: string) => void
  remove: () => void
  value: string
}

const Frame: React.FC<PropsType> = ({ type, onChange, remove, value }) => {
  return (
    <Wrapper>
      <span>{variantsTranslate[type]}</span>
      <RemoveBtn onClick={remove} title="Удалить" />
      <div className="mt15">
        <Input
          value={value}
          onChange={(val: string) => {
            onChange(val)
          }}
        />
      </div>
    </Wrapper>
  )
}

export default Frame
