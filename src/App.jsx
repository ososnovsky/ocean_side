
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Layout from './Layout';
import GalleryPage from './pages/GalleryPage'
import HomePage from './pages/HomePage';
// import FeaturesPage from './pages/FeaturesPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/gallery' element={<GalleryPage />} />
        {/* <Route path='/features' element={<FeaturesPage />} /> */}
      </Route>
    </Routes>
  )
}

export default App
