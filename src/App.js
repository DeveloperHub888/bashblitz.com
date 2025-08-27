import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SmokePage from './pages/SmokePage';
import Contact from './pages/Contact';
import EventManager from './pages/EventManager';
import PublicRelation from './pages/PublicRelation';




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<SmokePage />} />
          <Route exact path="/contact/" element={<Contact />} />
          <Route exact path="/event-manager/" element={<EventManager />} />
          <Route exact path="/public-relation/" element={<PublicRelation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
