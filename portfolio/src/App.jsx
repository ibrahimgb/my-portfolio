import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimoniales from "./components/testimoniales/Testimoniales";
import Footer from "./components/footer/Footer";

const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <Testimoniales />
            <Contact />
            <Footer />
        </>
    );
};

export default App;
