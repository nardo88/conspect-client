import Header from './components/header/Header'
import styled from 'styled-components'
import { Routes, Route, Navigate } from 'react-router-dom'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import NotFoundPage from './components/notFoundPage/NotFoundPage'
import { useAuth } from './hooks/auth.hook'
import { AuthContext } from './context/AuthContext'
import Articles from './components/articles/Articles'
import ArticleList from './components/articles/ArticleList'
import Editor from './components/editor/Editor'
import Loader from './components/loader/Loader'
import Roles from './components/roles/Roles'

function App() {
  const { token, userId, login, logout, ready, roles } = useAuth() as any
  const isAuthenticated = !!token

  return (
    <div>
      {ready ? (
        <AuthContext.Provider
          value={{
            token,
            userId,
            login,
            logout,
            isAuthenticated,
            roles
          }}
        >
          <Header />
          <Content>
            {isAuthenticated ? (
              <Routes>
                <Route path="/" element={<Articles />}>
                  <Route path=":id" element={<Articles />} />
                </Route>
                <Route path="/articles" element={<ArticleList />} />
                <Route path="/roles" element={<Roles />} />
                <Route path="/editor" element={<Editor />}>
                  <Route path=":id" element={<Editor />} />
                </Route>
                <Route path="*" element={<Navigate replace to="/" />} />
              </Routes>
            ) : (
              <Routes>
                <Route path="/signin" element={<SignIn login={login} />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            )}
          </Content>
        </AuthContext.Provider>
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default App

const Content = styled.div``
