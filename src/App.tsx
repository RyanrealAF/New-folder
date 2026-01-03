import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Doctrine from './pages/Doctrine';
import BreadcrumbWeb from './pages/BreadcrumbWeb';
import SeussToCypher from './pages/SeussToCypher';
import Music from './pages/Music';
import SourceCode from './pages/SourceCode';

function App() {
  return (
    <div className="min-h-screen bg-background text-primary">
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/doctrine" element={<Doctrine />} />
          <Route path="/doctrine/:section" element={<Doctrine />} />
          <Route path="/breadcrumb-web" element={<BreadcrumbWeb />} />
          <Route path="/seuss-to-cypher" element={<SeussToCypher />} />
          <Route path="/music" element={<Music />} />
          <Route path="/source-code" element={<SourceCode />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;