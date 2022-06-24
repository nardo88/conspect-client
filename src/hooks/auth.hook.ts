import { useState, useCallback, useEffect } from 'react'
import { AuthType } from '../types/auth'
import api from './axios.hook'

const storageName = 'userData'

export const useAuth = (): AuthType => {
  const [token, setToken] = useState<null | string>(null)
  const [userId, setUserId] = useState<null | string>(null)
  const [ready, setReady] = useState(false)
  const [roles, setRoles] = useState<string[]>([])

  const login = useCallback((jwt: string, id: string, roles: string[]) => {
    setToken(jwt)
    setUserId(id)
    setRoles(roles)

    localStorage.setItem(
      storageName,
      JSON.stringify({ token: jwt, userId: id })
    )
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

    if (data && data.token) {
      api
        .get('/user')
        .then((res) => {
            login(data.token, data.userId, res?.data?.roles)
        })
        .finally(() => setReady(true))
    } else {
        setReady(true)
    }
  }, [login])

  return {
    login,
    logout,
    token,
    userId,
    roles,
    ready,
  }
}
