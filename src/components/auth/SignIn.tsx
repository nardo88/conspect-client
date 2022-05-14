import { useState } from 'react'
import styled from 'styled-components'
import api from '../../hooks/axios.hook'
import Button from '../ui/Button'
import Input from '../ui/Input'

const buttonWrapper = `
    display: flex;
    justify-content: flex-end;
`

type SignInPropsType = {
    login: (token: string, userId: string) => void
}

const SignIn = ({login}: SignInPropsType) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const signInHandler = async () => {
        await api.post('/user/signin', {...formData})
            .then(response => {
                if(response.status === 200){
                    const {token, id} = response.data
                    login(token, id)
                    setFormData({
                        email: '',
                        password: ''
                    })
                }
            })
            .catch((error:Error) => console.log(error.message))
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
                    }}
                    placeholder="Password"

                />
            </FormItem>

            <FormItem styles={buttonWrapper}>
                <Button onClick={signInHandler}>Войти</Button>
            </FormItem>
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
${({ styles }) => styles}
`