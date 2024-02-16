// import logo from './logo.svg';
// import './App.css';
import Nav from './components/nav';
import React from 'react';
import HeadLine from './components/headLine';
import Batches from './components/batches';
import Exams from './components/exams';
import Results from './components/results';
import TopTeachers from './components/topTeachers';
import Institutes from './components/institutes';
import TopStudents from './components/topStudents';
import VideoAdd from './components/videoAdd';
import Whatwe from './components/whatweprovide';
// import Footer from './components/footer';
import Footer from './components/footer';
import Header from './components/head';
import './css/home.css' 
function App() {
  return (
    <main className='main'>
      <Header/>
      <Nav />
      <HeadLine />
      <Batches/>
      <Exams/>
      <Results/>
      <TopTeachers/>
      <Institutes/>
      <TopStudents/>
      <VideoAdd/>
      <Whatwe/>
      <Footer/>
    </main>
  );
}

export default App;
