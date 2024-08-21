import React from 'react';
import './App.scss';
import Sidebar from './Components/SideBar/SideBar.tsx';
import Dashboard from './Views/Dashboard.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cashbox from './Views/Cashbox.tsx';
import Inventory from './Views/Inventory.tsx';
import Classes from './Views/Classes.tsx';
import { ModalProvider } from './Components/Modal/Modal.tsx';
import Information from './Components/Information/Information.tsx';

function App() {
  return (
    <div className="App">
        <Router>
        <ModalProvider>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/cashbox" element={<Cashbox />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/classes/:id" element={<Classes />} />
          </Routes>
          <Information/>
        </ModalProvider>
        </Router>
      </div>
  );
}

export default App;
