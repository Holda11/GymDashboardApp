import React from 'react';
import './App.scss';
import Sidebar from './Components/SideBar/SideBar.tsx';
import Dashboard from './Views/Dashboard.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cashbox from './Views/Cashbox.tsx';

function App() {
  return (
    <div className="App">
      <Router>
      <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
        <Routes>
          <Route path="/cashbox" element={<Cashbox />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
