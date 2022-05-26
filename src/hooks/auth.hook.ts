import { useState, useCallback, useEffect } from 'react'
import { AuthType } from '../types/auth'

const storageName = 'userData'

export const useAuth = ():AuthType => {
    const [token, setToken] = useState<null | string>(null)
    const [userId, setUserId] = useState<null | string>(null)

    const login = useCallback((jwt: string, id: string) => {
        setToken(jwt)
        setUserId(id)

        localStorage.setItem(storageName, JSON.stringify({ token: jwt, userId: id }))
    }, [])

    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        localStorage.removeItem(storageName)
        window.location.reload()
    }, [])

    useEffect(() => {
        // @ts-ignore
        const data = JSON.parse(localStorage.getItem(storageName))

        if(data && data.token){
            login(data.token, data.userId)
        }
    }, [login])

    return {
        login,
        logout,
        token,
        userId
    }
}