function Header() {
  return (
    <nav className="indigo accent-4">
      <div className="nav-wrapper">
        <a href="/movies/" className="brand-logo">
          React Movies
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/dragun-igor/movies">Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
