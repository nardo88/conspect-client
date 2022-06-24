export type AuthType = {
    login: (token:string, id: string, roles: string[]) => void
    logout: () => void
    token: string | null
    userId: string | null
    ready: boolean
    roles: string[]
}

