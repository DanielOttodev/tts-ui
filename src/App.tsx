import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import { AuthContextProvider } from './context/AuthContext';
import { Protected } from './components/Protected';
import { RedirectUser } from './components/RedirectUser';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import FilesPage from './pages/Files';
import AccountPage from './pages/Account';
import HelpPage from './pages/Help';
function App() {

  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Protected><MainLayout /></Protected>} >
            <Route path="/home" element={<Protected><Home /></Protected>} />
            <Route path="/files" element={<Protected><FilesPage /></Protected>} />
            <Route path="/account" element={<Protected><AccountPage /></Protected>} />
            <Route path="/help" element={<Protected><HelpPage /></Protected>} />
          </Route>
          <Route path="/login" element={<RedirectUser><Login /></RedirectUser>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </AuthContextProvider>

    </Router>

  )
}

export default App