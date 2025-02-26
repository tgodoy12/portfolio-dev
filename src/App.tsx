import Navbar from './components/navbar'
import Home from './sections/home'
import About from './sections/about'
import Projects from './sections/projects'

function App() {
  

  return (
    <div className='container mt-8 font-oxanium'>
      <Navbar />
      <main>
        <section id="landing"><Home /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        {/* <section id="contact"><Contact /></section> */}
      </main>
  
    </div>
  )
}

export default App
