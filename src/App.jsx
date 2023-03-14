import './App.css'
import Footer from './assets/components/Footer'
import Form from './assets/components/Form'
import Home from './assets/components/Home'
import Puficart from './assets/components/Puficart'
import Pufinap from './assets/components/Pufinap'
import Pufipuff from './assets/components/Pufipuff'
import Pufirain from './assets/components/Pufirain'

function App() {
  return (
    <main className="App">
      <Home />
      <Pufirain />
      <Pufipuff />
      <Puficart />
      <Pufinap />
      <Form />
      <Footer />
    </main>
  )
}

export default App
