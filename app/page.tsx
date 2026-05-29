import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Tour from "./components/Tour";
import EmailSMS from "./components/EmailSMS";
import Videos from "./components/Videos";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Tour />
        <EmailSMS />
        <Videos />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
