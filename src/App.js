import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BMICalculator from './components/BMICalculator';
import BMIInfo from './components/BMIInfo';
import Navbar from './components/Navbar';
import { AppContainer, Footer } from './styles/AppStyles';

function App() {
  const currentDate = new Date().toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Router>
      <AppContainer>
        <Navbar />
        <Routes>
          <Route path="/" element={<BMICalculator />} />
          <Route path="/bmi-info" element={<BMIInfo />} />
        </Routes>
        <Footer>
          © {currentDate} | 
          <a href="https://teknokapsul.com" target="_blank" rel="noopener noreferrer">
            TeknoKapsül
          </a>
        </Footer>
      </AppContainer>
    </Router>
  );
}

export default App; 