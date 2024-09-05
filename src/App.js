import React from 'react';
import './App.scss';
import InfoCards from './components/InfoCards';
import PersonalInfo from './components/PersonalInfo';
import Contacts from './components/Contacts';
import Projects from './components/Projects';
import Header from './components/Header';
import Footer from './components/Footer';
import Technologies from './components/Technologies';
import Reviews from './components/Reviews';
function App() {
  return (
    <div className="App">
      <div className="App-body">
        <Header/>
        <section id="home">
          <PersonalInfo/>
        </section>
        <section id="aboutme">
        <InfoCards/>
        </section>
        <section id="projects">
        <Projects/>
        </section>
        <section id="technologies">
        <Technologies/>
        </section>
        {/* <section id="reviews">
        <Reviews/>
        </section> */}
        <section id="contacts">
        <Contacts/>
        </section>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

