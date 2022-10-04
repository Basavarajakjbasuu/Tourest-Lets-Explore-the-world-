import './App.css'

import Navbar from './components/Navbar/Navbar'
import Destination from './container/Destination/Destination'
import Header from './container/Header/Header'

const App = () => {
  return (
    <div className='mainContainer'>
      <Navbar />
      <Header />
      <Destination />
    </div>
  )
}

export default App