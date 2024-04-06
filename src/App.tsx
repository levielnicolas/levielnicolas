import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './index.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/about" Component={About} />
          <Route path="/projects" Component={Projects} />
          <Route path="/contact" Component={Contact} />
          <Route path="/" Component={About} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
