import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import Plans from './components/Plans.jsx';
import Method from './components/Method.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Plans />
        <Method />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
