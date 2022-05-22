import { useEffect, useState } from "react"
import styled from "styled-components"
import api from "../../hooks/axios.hook"
import Loader from "../loader/Loader"
import colors from "../ui/colors"
import Select from "../ui/Select"
import Input from '../ui/Input'
import { categories } from '../ui/settings'
import { DefaultOptions } from "../../types/default.options"
import Button from "../ui/Button"
import dayjs from "dayjs"
import breackpoints from "../ui/breackpoints"


type Article = {
    title: string
    category: string
    createdAt: string
    updatedAt: string
    id: string
}

const ArticleList: React.FC = () => {
    const LIMIT = 10
    const [data, setData] = useState<Article[]>()
    const [isLoading, setIsLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [total, seTotal] = useState(0)

    // Filters
    const [category, setCategory] = useState<null | DefaultOptions>(null)
    const [title, setTitle] = useState('')


    useEffect(() => {
        setIsLoading(true)
        api.get(`/article?page=${currentPage}&limit=${LIMIT}`)
            .then((res) => {
                setData(res.data.data)
                seTotal(res.data.total)
            })
            .catch((error: Error) => {
                console.log(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [currentPage])

    console.log('data', data)
    console.log('total', total)

    return (
        <AdminWrapper>
            <Filters>
                <div className="inputs">
                    <div className="mb20">
                        <Select
                            value={category}
                            onChange={(value: DefaultOptions) => {
                                setCategory(value)
                            }}
                            options={categories}
                            label="Выберите категорию"
                        />
                    </div>
                    <div className="mb20">
                        <Input
                            value={title}
                            onChange={(text: string) => {
                                setTitle(text)
                            }}
                            label="Укажите заголовок"
                        />
                    </div>
                </div>
                <Button onClick={() => null}>сбросить фильтр</Button>
            </Filters>
            <DataWrapper>
                <ul>
                    {
                        data?.length ?
                            data.map((item: Article) =>
                                <ArticleItem key={item.id}>
                                    <div className="title">{item.title}</div>
                                    <div className="category">{item.category}</div>
                                    <div className="date">{dayjs(item.createdAt).format('DD.MM.YYYY')}</div>
                                    <div className="btn">
                                        <EditBtn />
                                    </div>
                                    <div className="btn">
                                        <RemoveBtn />
                                    </div>
                                </ArticleItem>)
                            :
                            <p>Нет статей для отображения</p>
                    }
                </ul>
            </DataWrapper>
            {isLoading && <Loader />}
        </AdminWrapper>
    )
}

export default ArticleList

const AdminWrapper = styled.div`
    display: flex;
    padding: 20px;
    background-color: ${colors.lightGrey};
    min-height: calc(100vh - 59px);

    ${breackpoints.xl}{
        flex-direction: column;
    }
`
const Filters = styled.div`
    border: 1px solid ${colors.lightGrey};
    min-width: 250px;
    padding: 15px;
    border-radius: 4px;
    margin-right: 15px;
    background-color: ${colors.white};
    box-shadow: 0 0 5px 5px rgba(0,0,0,0.2);
    align-self: flex-start;

    ${breackpoints.xl}{
        min-width: 100%;
        margin-bottom: 20px;

        & > .inputs{
            display: flex;
            justify-content: space-between;
            width: 100%;

            & > div{
                width: 48%;
            }

            ${breackpoints.md}{
                flex-direction: column;
                & > div{
                    width: 100%;
                }
            }

           
        }
    }

`
const DataWrapper = styled.div`
    padding: 15px;
    border-radius: 4px;
    background-color: ${colors.white};
    flex-grow: 1;
    box-shadow: 0 0 5px 5px rgba(0,0,0,0.2);
    min-height: 100%;
`

const ArticleItem = styled.li`
    margin: 10px 0;
    border-bottom: solid 1px ${colors.grey};
    align-items: center;
    display: grid;
    grid-template-columns: 3fr repeat(4, 1fr);
    padding: 6px 10px;

    ${breackpoints.md}{
        grid-template-columns: 2fr repeat(3, 1fr);
    }

    & > .title {
        grid-column-start: 1;
    }

    & > .category {
        grid-column-start: 2;
        justify-self: center;
    }

    & > .date{
        grid-column-start: 3;
        justify-self: center;

        ${breackpoints.md}{
            display: none;
        }
    }

    & > .btn {
        justify-self: center;

        ${breackpoints.md}{
            justify-self: end;
        }

    }

    ${breackpoints.md}{
        font-size: 12px;
    }
   
`

const EditBtn = styled.button`
    width: 30px;
    height: 30px;
    background-image: url('/assets/img/edit.svg');
    background-color: transparent;
    outline: none;
    border: none;

    ${breackpoints.md}{
        width: 20px;
        height: 20px;
    }
`

const RemoveBtn = styled.button`
    width: 30px;
    height: 30px;
    background-image: url('/assets/img/remove.svg');
    background-color: transparent;
    outline: none;
    border: none;

    ${breackpoints.md}{
        width: 20px;
        height: 20px;
    }

`