// Components
import About from "./components/About"
import BackToTopBtn from "./components/BackToTopBtn"
import CTA from "./components/CTA"
import Cars from "./components/Cars"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Testimonials from "./components/Testimonials"
import Why from "./components/Why"

export default function Home() {
  return (
    <main className="max-w-[1920px] bg-white mx-auto relative overflow-hidden">
      <Header />
      <Hero />
      <Cars />
      <About />
      <Why />
      <Testimonials />
      <CTA />
      <Footer />
      <BackToTopBtn />
      <div className="h-[4000px]"></div>
    </main>
  )
}
