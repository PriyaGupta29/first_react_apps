import React from 'react';
import {Link} from 'react-router-dom';

function Nav(){
    const linksStyle = {
        color: 'white',
        textDecoration: 'none'
    };

    return (
      <nav>
        <ul className="nav-links">
          <Link style={linksStyle} to="/"><li>Home</li></Link>
          <Link style={linksStyle} to="/add"><li>Simple Straight Module</li></Link>
          <Link style={linksStyle} to="/two_components"><li>Two Components Module</li></Link>
          <Link style={linksStyle} to="two_way"><li>Two Way Link Module</li></Link>
          <Link style={linksStyle} to="/read_json"><li>JSON Module</li></Link>
        </ul>
      </nav>
    )
  }
  
  export default Nav;