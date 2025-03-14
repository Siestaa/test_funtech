import { About } from './components/about/about'
import { Banner } from './components/banner/banner'
import { Cards } from './components/cards/cards'
import { Footer } from './components/footer/footer'
import { Navigation } from './components/navigation/navigation'

function App() {
  return (
    <>
      <Navigation />
      <main>
        <About />
        <Cards />
        <Banner />
      </main>
      <Footer />
    </>
  )
}

export default App
