function Header({ setPage }) {
  function changePage(e) {
    e.preventDefault();
    window.history.pushState(null, '', e.target.hash);
    setPage(e.target.hash);
  }

  return (
    <header className="header">
      <a href="#/" onClick={ changePage } >Home</a>
      <a href="#/about" onClick={ changePage } >About</a>
    </header>
  );
}

export default Header;

