import MDEditor from '@uiw/react-md-editor'
import { useState } from 'react'

const MarkDownEditor: React.FC = () => {
  const [value, setValue] = useState('') as any

  // <MDEditor.Markdown source={value} />

  return (
    <div className="container">
      <MDEditor
        value={value}
        onChange={(val) => setValue(val)}
        preview="edit"
      />
    </div>
  )
}

export default MarkDownEditor
