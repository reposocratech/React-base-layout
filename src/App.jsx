import { HelmetProvider } from 'react-helmet-async'
import './App.css'
import MainRoutes from './routes/MainRoutes'

function App() {
  return (
    <>
    <HelmetProvider>
      <MainRoutes/>
    </HelmetProvider>
    </>
  )
}

export default App
