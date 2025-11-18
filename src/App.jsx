import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Categories from './components/Categories'
import Menu from './components/Menu'
import Locations from './components/Locations'
import Gallery from './components/Gallery'
import Franchise from './components/Franchise'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#F5F1EB] text-[#2E2E2E]">
      <NavBar />
      <Hero />
      <About />
      <Categories />
      <Menu />
      <Locations />
      <Gallery />
      <Franchise />
      <Footer />
    </div>
  )
}

export default App
