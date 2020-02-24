import React from "react";

const Header = () => {
  return (
    <nav style={{ marginBottom: "15px", padding: '0 20px ' }}>
      <div className='nav-wrapper'>
        <a
          href='/'
          className='brand-logo'
          style={{
            fontFamily: "Oswald",
            textTransform: "uppercase",
            letterSpacing: "2px"
          }}
        >
          Cosodevt Todo App
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='badges.html'>About</a>
          </li>
          <li>
            <a href='collapsible.html'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
