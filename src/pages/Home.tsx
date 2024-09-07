import Head from "./Home/components/Head";
import MegaMenu from "./Home/components/MegaMenu";
import Hero from "./Home/components/Hero";
import Toolbar from "./Home/components/Toolbar";
import Popular from "./Home/components/Popular";
import Hotiels from "./Home/components/Hotiels";
import Company from "./Home/components/Company";
import FlightOffer from "./Home/components/FlightOffer";
import ShowImage from "./Home/components/ShowImage";
import Destinations from "./Home/components/Destinations";
import Client from "./Home/components/Client";
import Tip from "./Home/components/Tip";
import Contact from "./Home/components/Contact";
import Footer from "./Home/components/Footer";

export default function Home() {
  return (
    <section>
        <Head />
        <MegaMenu />
        <Toolbar />
        <Hero/>
        <Popular />
        <Hotiels />
        <Company />
        <FlightOffer />
        <ShowImage />
        <Destinations />
        <Client />
        <Tip />
        <Contact />
        <Footer />
    </section>
  )
}
