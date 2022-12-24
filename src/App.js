import React from 'react'
import About from './component/about/about'
import Contact from './component/contact/contact'
import Experience from './component/experience/experience'
import Service from './component/Service/Service'
import Header from './component/header/header'
import Nav from './component/nav/Nav'
import Portfolio from './component/portfolio/portfolio'
import Testimonial from './component/testimonial/testimonial'
import Footer from './component/footer/footer'
const App = () => {
    return (
        <>   
        <Header/>
           <Nav/>
        <About />
        <Experience />
            <Service/>
            <Portfolio/>
            <Testimonial/>
            <Contact />
           <Footer/>
        </>

    )
}

export default App