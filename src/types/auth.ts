export type AuthType = {
    login: (token:string, id: string) => void
    logout: () => void
    token: string | null
    userId: string | null
    ready: boolean
}

