export type ContextType = {
    roles: string[],
    token: null | string
    userId: null | string  
    isAuthenticated: boolean
    logout: () => void
    login: (token:string, id: string, roles: string[]) => void

  }

  