import Header from "./components/header/Header";
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import NotFoundPage from "./components/notFoundPage/NotFoundPage";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/AuthContext";

function App() {
  const {token, userId, login, logout} = useAuth() as any
  const isAuthenticated = !!token
  return (
    <div>
      <AuthContext.Provider value={{
        token, userId, login, logout, isAuthenticated
      }}>
      <Header />
      <Content>
        {
          isAuthenticated ?
          <Routes>

          </Routes>
          :
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        }
      </Content>
      </AuthContext.Provider>
    </div>
  );
}

export default App

const Content = styled.div``
