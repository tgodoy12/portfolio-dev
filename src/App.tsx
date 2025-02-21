import Navbar from './components/navbar'
import Home from './sections/home'
import About from './sections/about'

function App() {
  

  return (
    <div className='container mt-8 font-inconsolata'>
      <Navbar />
      <main>
        <section id="landing"><Home /></section>
        <section id="about"><About /></section>
        {/* <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section> */}
      </main>
  
    </div>
  )
}

export default App
