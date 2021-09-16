import React, { useState } from 'react';
import Navigation from './Navigation';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Footer from './Footer';
import projects from './projects';


export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
          }
          if (currentPage === 'Portfolio') {
            return <Portfolio projects={projects}/>;
          }
          if (currentPage === 'Contact'){
              return <Contact />;
          }
          return <Resume />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
          <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
         <div className="background">
          {renderPage()}
          <Footer />
          </div>
        </div>
      );
}