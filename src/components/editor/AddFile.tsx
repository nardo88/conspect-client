import styled from 'styled-components'
import colors from '../ui/colors'
import { variantsTranslate } from '../ui/settings'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import useFirebase from '../../hooks/firebase.hook'
import { RemoveBtn } from '../ui/components'
import breackpoints from '../ui/breackpoints'
import { ArticleEnum } from '../../types/articles'

type PropsType = {
  type: ArticleEnum
  onChange: (value: string) => void
  remove?: () => void
  url: string
  label?: string
}

const AddFile: React.FC<PropsType> = ({
  type,
  onChange,
  remove,
  url,
  label,
}) => {
  const [file, setFile] = useState(null) as any
  const [urlFile, setUrlFile] = useState(url)
  const [progress, setProgress] = useState(0)
  const { storage, getDownloadURL, ref, uploadBytesResumable } = useFirebase()

  useEffect(() => {
    if (file) {
      const name = dayjs().valueOf()
      const imagesRef = ref(storage, `/${type}/${name}`)
      const uploadTask = uploadBytesResumable(imagesRef, file)

      uploadTask.on(
        'state_changed',
        (snapshot: any) => {
          const progress = Math.floor(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          )
          setProgress(progress)
        },
        (error: any) => {
          switch (error?.code) {
            case 'storage/unauthorized':
              console.log(`User doesn't have permission to access the object`)
              break
            case 'storage/canceled':
              console.log(`User canceled the upload`)
              break
            case 'storage/unknown':
              console.log(
                `Unknown error occurred, inspect error.serverResponse`
              )
              break
          }
        },
        () => {
          // После того как файл загружен мы получаем ссылку
          getDownloadURL(uploadTask.snapshot.ref).then(
            (downloadURL: string) => {
              setUrlFile(downloadURL)
              onChange(downloadURL)
            }
          )
        }
      )
    } else {
      setProgress(0)
    }
  }, [file])

  return (
    <Wrapper>
      {label ? <span>{label}</span> : <span>{variantsTranslate[type]}</span>}
      <Control>
        {remove && <RemoveBtn onClick={remove} title="Удалить" />}
        <InputWrapper>
          <input
            type="file"
            onChange={(e: any) => {
              setFile(e.target.files[0])
            }}
          />
        </InputWrapper>
      </Control>

      {progress > 0 && (
        <InfoContainer>
          <Progress progress={progress}>
            <span>{`${progress}%`}</span>
          </Progress>
        </InfoContainer>
      )}
      {type === 'image' && urlFile && <PreviewImage src={urlFile} alt="" />}
      {type === 'file' && urlFile && (
        <a
          download={urlFile}
          href={urlFile}
          className="mt20 df"
          target="_blank"
          rel="noreferrer"
        >
          Скачать
        </a>
      )}
      {type === 'video' && urlFile && <Video controls={true} src={urlFile} />}
    </Wrapper>
  )
}

export default AddFile

export const Wrapper = styled.div`
  margin-bottom: 20px;
  padding: 16px;
  border: 1px solid ${colors.grey};
  border-radius: 4px;
  position: relative;

  & > span {
    background-color: ${colors.white};
    color: ${colors.grey};
    padding: 0 5px;
    position: absolute;
    top: 0;
    left: 8px;
    transform: translateY(-50%);
    font-size: 12px;
    line-height: 1;
  }
`
export const Control = styled.div`
  display: flex;
  gap: 25px;
`

const InfoContainer = styled.div`
  margin-top: 15px;
`
const Progress = styled.div<{ progress: number }>`
  border: 1px solid ${colors.green};
  position: relative;
  max-width: 300px;
  padding: 3px 5px;
  background-color: ${colors.grey};

  & > span {
    position: relative;
    z-index: 10;
    color: ${colors.white};
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: ${({ progress }) => progress}%;
    background-color: ${colors.green};
    z-index: 5;
  }
`
const PreviewImage = styled.img`
  max-width: 300px;
  margin-top: 15px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${colors.lightBrown};
`

const InputWrapper = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  background-image: url('/assets/img/upload.svg');

  & > input {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    font-size: 0;
    z-index: 10;
    opacity: 0;
    cursor: pointer;
  }

  ${breackpoints.md} {
    width: 20px;
    height: 20px;
  }
`
const Video = styled.video`
  margin-top: 15px;
  max-width: 300px;
  width: 100%;
`
