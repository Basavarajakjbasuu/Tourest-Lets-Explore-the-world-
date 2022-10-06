import './App.css'

import { Navbar, Header, Destination, PopularToure, AboutUs, Blog, Footer } from './components/index'

const App = () => {
  return (
    <div className='mainContainer'>
      <Navbar />
      <Header />
      <Destination />
      <PopularToure />
      <AboutUs />
      <Blog />
      <Footer />
    </div>
  )
}

export default App