import { useState } from 'react'
import styled from 'styled-components'
import api from '../../hooks/axios.hook'
import Loader from '../loader/Loader'
import Button from '../ui/Button'
import colors from '../ui/colors'
import Input from '../ui/Input'

const buttonWrapper = `
    display: flex;
    justify-content: space-between;

    button {
        align-self: flex-end;
    }
`

type SignInPropsType = {
    login: (token: string, userId: string) => void
}

const SignIn = ({ login }: SignInPropsType) => {
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const signInHandler = async () => {
        setIsLoading(true)
        await api.post('/user/signin', { ...formData })
            .then(response => {
                if (response.status === 200) {
                    const { token, id } = response.data
                    login(token, id)
                    setFormData({
                        email: '',
                        password: ''
                    })
                }
            })
            .catch((error) => {
                console.log(error)
                if (error?.response?.data?.message) {
                    setErrorMessage(error?.response?.data?.message)
                    setIsError(true)
                }
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    return <div>
        <Wrapper>
            <h2>Войти</h2>
            <FormItem>
                <Input
                    value={formData.email}
                    type="email"
                    onChange={(value: string) => {
                        setFormData({ ...formData, email: value })
                        setIsError(false)
                    }}
                    placeholder="Email"
                    label="Email"

                />
            </FormItem>
            <FormItem>
                <Input
                    value={formData.password}
                    type="password"
                    onChange={(value: string) => {
                        setFormData({ ...formData, password: value })
                        setIsError(false)

                    }}
                    placeholder="Password"
                    label="Password"
                />
            </FormItem>

            <FormItem styles={buttonWrapper}>
                <Button onClick={signInHandler}>Войти</Button>
            {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
            </FormItem>
            {isLoading && <Loader />}
        </Wrapper>
    </div>
}

export default SignIn

const Wrapper = styled.div`
    width: 100%;
    max-width: 400px;
    margin: 50px auto 0;
`

const FormItem = styled.div<{ styles?: string }>`
    margin-top: 20px;
    ${({ styles }) => styles};
    
`

const ErrorMessage = styled.div`
    color: ${colors.red};
    animation: fadeIn 500ms forwards;
`