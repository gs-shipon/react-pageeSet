
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import RootLayouts from './components/layout/RootLayouts'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Error from './components/pages/Error'
import Service from './components/pages/service'
import Price from './components/pages/Price'
import Blog from './components/pages/Blog'
import Portfolio from './components/pages/Portfolio'



function App() {


  return (
   <>
  <Routes>
    <Route  path="/" element={<RootLayouts />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
     <Route path="contact" element={<Contact />} />
     <Route path="service" element={<Service/>} />
     <Route path="price" element={<Price />} />
     <Route path="blog" element={<Blog />} />
      <Route path="portfolio" element={<Portfolio />} />
     <Route path="*" element={<Error />} />
    </Route>
  </Routes>
   </>
  )
}

export default App
