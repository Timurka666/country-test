import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RootPage from './pages/rootPage'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
