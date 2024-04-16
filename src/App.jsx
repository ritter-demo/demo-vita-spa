import { useState, useEffect } from 'react';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';

function App() {
  const [ page, setPage ] = useState('');

  function handlePageLoad() {
    setPage(document.location.hash || '#/');
  }

  useEffect( () => {
    handlePageLoad();
    window.addEventListener('popstate', handlePageLoad);

    return () => {
      window.removeEventListener('popstate', handlePageLoad);
    };
  }, []);

  return (
    <>
    <Header setPage={setPage}/>
    { page === '#/' && <Home/> }
    { page === '#/about' && <About/> }
    <Footer/>
    </>
  );
}

export default App;
