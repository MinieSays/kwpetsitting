import { AboutUs, CallToAction, Footer, Hero, Icons, Promises, Reviews } from './sections'
import Nav from './components/Nav'

const App = () => {
  return (
    <main>
      <Nav />
      <section>
        <Hero/>
      </section>
      <section className="padding">
        <Icons/>
      </section>
      <section className="padding">
        <AboutUs/>
      </section>
      <section className="padding">
        <CallToAction/>
      </section>
      <section className="padding">
        <Reviews/>
      </section>
      <section className="padding">
        <Promises/>
      </section>
      <section className="padding">
        <Footer/>
      </section>
    </main>
  )
}

export default App