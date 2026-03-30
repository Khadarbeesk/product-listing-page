import { useState } from "react";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      {/* TOP STRIP */}
      <div className="top-strip">
        <div className="top-strip-inner">
          <div className="strip-item">
            <img src="/element-4.png" alt="element" className="strip-icon" />
            <p>Lorem ipsum dolor</p>
          </div>
          <div className="strip-item">
            <img src="/element-4.png" alt="element" className="strip-icon" />
            <p>Lorem ipsum dolor</p>
          </div>
          <div className="strip-item">
            <img src="/element-4.png" alt="element" className="strip-icon" />
            <p>Lorem ipsum dolor</p>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="header">
        <div className="header-row">

          {/* LEFT */}
          <div className="left-section">
            <div
              className="hamburger"
              onClick={() => setOpenMenu(!openMenu)}
            >
              ☰
            </div>
            <img src="/logo.png" alt="logo" className="logo-small" />
          </div>

          {/* CENTER */}
          <div className="center-logo">LOGO</div>

          {/* RIGHT */}
          <div className="right-icons">
            <img src="https://img.icons8.com/ios/20/search--v1.png" alt="search"/>
            <img src="https://img.icons8.com/ios/20/like--v1.png"alt="buy" />
            <img src="https://img.icons8.com/ios/20/shopping-bag--v1.png" alt="contacts" />
            <img src="https://img.icons8.com/ios/20/user--v1.png alt=home" />
            <span className="lang">ENG ▾</span>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="nav">
          
         <a href="/">SHOP</a>
<a href="/">SKILLS</a>
<a href="/">STORIES</a>
<a href="/">ABOUT</a>
<a href="/">CONTACT US</a>
        </nav>

        {/* MOBILE MENU */}
        {openMenu && (
          <div className="mobile-menu">
            <p>SHOP</p>
            <p>SKILLS</p>
            <p>STORIES</p>
            <p>ABOUT</p>
            <p>CONTACT US</p>
          </div>
        )}
      </header>

      {/* HERO */}
      <div className="hero">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          <br />
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </div>
    </>
  );
}

export default Header;