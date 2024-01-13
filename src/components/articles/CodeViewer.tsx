import { FC, useEffect, useRef, useState } from 'react'
//@ts-ignore
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
//@ts-ignore
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import styled from 'styled-components'
import colors from '../ui/colors'

interface CodeViewerProps {
  code: string
}
type TimeOutType = ReturnType<typeof setTimeout>

export const CodeViewer: FC<CodeViewerProps> = ({ code }) => {
  const [isCopied, setIsCopied] = useState(false)
  const ref = useRef<TimeOutType | null>(null)

  const clickHandler = () => {
    setIsCopied(true)
    navigator.clipboard.writeText(code)
  }

  useEffect(() => {
    if (isCopied && !ref.current) {
      ref.current = setTimeout(() => {
        setIsCopied(false)
        ref.current = null
      }, 3000)
    }
  }, [isCopied])

  return (
    <Wrapper>
      <CopyBtn isCopied={isCopied} onClick={clickHandler}>
        {isCopied ? 'Copied' : 'Copy'}
      </CopyBtn>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {code}
      </SyntaxHighlighter>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`

const CopyBtn = styled.button<{ isCopied: boolean }>`
  position: absolute;
  top: 6px;
  right: 6px;
  font-size: 12px;
  padding: 3px 4px;
  line-height: 1;
  z-index: 10;
  border-radius: 4px;
  border: none;
  background: ${({ isCopied }) => (isCopied ? colors.green : colors.white)};
  colors: ${({ isCopied }) => (isCopied ? colors.white : colors.brown)};
`
