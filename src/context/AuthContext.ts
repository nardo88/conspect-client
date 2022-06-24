import {createContext} from 'react'

export const AuthContext = createContext({
    token: null,
    userId: null,
    login: (token: string, userId: string) => null,
    logout: () => null,
    isAuthenticated: false,
    roles: []
})