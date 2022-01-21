import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Search from './components/Search';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path='/' element={<Search />} />
          <Route path='/anime/:id' element={<Details />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
