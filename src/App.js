import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/header';
import { About } from './components/about/about';
import { Portfolio } from './components/portfolio/portfolio';
import { Testimonials } from './components/testimonials/testimonials';
import { Contactus } from './components/contactus/contactus';
import { Resume } from './components/resume/resume';
import resumeData from './resumeData';
import { Footer } from './components/footer/footer';
function App() {
  return (
    <div className="App">
      <Header resumeData={resumeData}/>
      <Resume/>
      <Portfolio/>
      <Testimonials/>
      <Contactus/>
      <Footer resumeData={resumeData}/>

    </div>
  );
}

export default App;
