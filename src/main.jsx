import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ReactDOM from 'react-dom/client';
import Test from './pages/Test';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorPage from './pages/ErrorPage';
import About from './pages/About';
import Property from './pages/Property';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/css/all.min.css';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div className='container'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/about" element={<About />} />
        <Route path="/property/:id" element={<Property />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      </div>
      <Footer />
    </Router>
  </React.StrictMode>,
)
