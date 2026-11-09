import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import Projects from '../components/projects/Projects';
import Skills from '../components/skills/Skills';
import Journey from '../components/journey/Journey';
import GithubActivity from '../components/github/GithubActivity';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';

export default function Home({ data }) {
  return (
    <>
      <Navbar />
      <main>
        <Hero profile={data.profile} />
        <About />
        <Projects projects={data.projects} />
        <Skills skills={data.skills} />
        <Journey journey={data.journey} />
        {/* <GithubActivity profile={data.profile} /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
