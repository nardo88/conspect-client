import { ArticleType } from "../../types/articles"

type SettingsType = {
  value: ArticleType
  setValue: (value: ArticleType) => void
}

const Settings: React.FC<SettingsType> = ({value, setValue}) => {
  console.log(value)
  return (
    <div>
      <div>Settings</div>
    </div>
  )
}

export default Settings
