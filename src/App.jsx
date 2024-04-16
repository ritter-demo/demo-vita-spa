import { useState, useEffect } from 'react';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';

function App() {
  const [ page, setPage ] = useState('');

  function handlePageLoad() {
    console.log('updating state');
    setPage(document.location.hash || '#/');
  }

  useEffect( () => {
    console.log('in effect');
    handlePageLoad();

    window.addEventListener('popstate', handlePageLoad);

    return () => {
      console.log('cleanup');
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
