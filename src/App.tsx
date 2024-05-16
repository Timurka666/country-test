import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RootPage from './pages/rootPage'
import Layout from './shared/layout'
import CountryPage from './pages/countryPage'


function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<RootPage />} />
          <Route path='/country/:name' element={<CountryPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
