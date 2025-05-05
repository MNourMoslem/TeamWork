import { BrowserRouter } from 'react-router-dom'
import AuthRoutes from './pages/login/AuthRoutes.tsx'
import UserRoutes from './pages/UserRoutes.tsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthRoutes/>
        <UserRoutes/>
      </BrowserRouter>
    </>
  )
}

export default App
