import React, {Component} from 'react';
import {Link} from 'react-router';

const Navigation = () => {
     return (
            <div>
               <Link to="/" activeStyle={{ color: 'red' }}>Home</Link>
               <Link to="/about" activeStyle={{ color: 'red' }}>About</Link>
            </div>
    );
};

export default Navigation;
