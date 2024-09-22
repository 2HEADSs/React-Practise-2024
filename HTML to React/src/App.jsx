import About from './components/About';
import ContactUs from './components/ContactUs';
import Download from './components/Dowlnload';
import FAQ from './components/FAQ';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import OurTeatm from './components/OurTeam';
import Testimonails from './components/Testimonials';
import WatchNow from './components/WatchNow';

function App() {
    return (
        <>
            {/* <!-------<Navigation></Navigation> Start-------> */}
            <Navigation></Navigation>
            {/* <!-------<Navigation></Navigation> Start-------> */}

            {/* <!-------<Header></Header> Start-------> */}
            <Header></Header>
            {/* <!-------Banner End-------> */}

            {/* <!-------About End-------> */}
            <About></About>
            {/* <!-------About End-------> */}

            {/* <!-------Video Start-------> */}
            <WatchNow></WatchNow>
            {/* <!-------Video End-------> */}

            {/* <!-------Features Start-------> */}
            <Features></Features>
            {/* <!-------Features End-------> */}

            {/* <!-------Team Start-------> */}
            <OurTeatm></OurTeatm>
            {/* <!-------Team End-------> */}

            {/* <!-------Testimonial Start-------> */}
            <Testimonails></Testimonails>
            {/* <!-------Testimonial End-------> */}

            {/* <!-------FAQ Start-------> */}
            <FAQ></FAQ>
            {/* <!-------FAQ End-------> */}

            {/* <!-------Contact Start-------> */}
            <ContactUs></ContactUs>
            {/* <!-------Contact End-------> */}

            {/* <!-------Download End-------> */}
            <Download></Download>
            {/* <!-------Download End-------> */}

            {/* <!-------Footer End-------> */}
            <Footer></Footer>
            {/* <!-------Footer End-------> */}
        </>
    );
}

export default App;
