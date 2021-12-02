import Header from './components/Header'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/AboutUs';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactBtn from './pages/Home/HomeComponents/Contact';
import WorkAndServices from './pages/Home/HomeComponents/WorkAndServices';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Switch>

        <Route exact path = "/">
          <WorkAndServices />
          <ContactBtn />
        </Route>

        <Route path = "/about">
          <About/>
        </Route>

        <Route path = "/services">
          <Services />
        </Route>

        <Route path = "/gallery">
          <Gallery />
        </Route>

        <Route path = "/contactus">
          <ContactUs />
        </Route> 

      </Switch>
      <Footer />
    </Router>
  );
}


export default App;
