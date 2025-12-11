import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import BreadcrumbWeb from './pages/BreadcrumbWeb';
import SeussToCypher from './pages/SeussToCypher';
import Music from './pages/Music';
import SourceCode from './pages/SourceCode';
import Doctrine from './pages/Doctrine';
import Book2 from './pages/Book2';
import Book3 from './pages/Book3';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-primary font-sans selection:bg-accent selection:text-background">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="doctrine" element={<Doctrine />} />
          <Route path="doctrine/*" element={<Doctrine />} />
          <Route path="breadcrumb-web" element={<BreadcrumbWeb />} />
          <Route path="seuss-to-cypher" element={<SeussToCypher />} />
          <Route path="music" element={<Music />} />
          <Route path="book2" element={<Book2 />} />
          <Route path="book3" element={<Book3 />} />
          <Route path="source-code" element={<SourceCode />} />
          <Route path="*" element={<div className="p-20 text-center text-secondary font-mono">404: Path Not Found</div>} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);