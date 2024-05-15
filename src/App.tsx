import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RootPage from './pages/rootPage'
import Layout from './shared/layout'


function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<RootPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
