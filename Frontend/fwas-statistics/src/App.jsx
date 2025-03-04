import { useState } from 'react'
// import './App.css'
import NavBar from './components/NavBar.jsx'
import Users from './Views/Users.jsx';
import Alerts from './Views/Alerts.jsx'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div className="body1">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/alerts" element={<Alerts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
