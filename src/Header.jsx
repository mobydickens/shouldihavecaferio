import React from 'react';
import { Link } from 'react-router-dom';

function Header () {
	return(
    <div>
      <nav>
        <header>
          <div className='nav-title'>Should I Have Cafe Rio?</div>
          <div className='links'>
            <Link className='link' to="/">Home</Link>
            <Link className='link' to="/about">About</Link>
            <a className='link' href="https://www.caferio.com">Cafe Rio</a>
          </div>
        </header>
      </nav>
    </div>
  )
}

export default Header;