import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import TopBanner from './TopBanner';
import Nav from './Nav';
import '../css/Header.scss';

const Header = () => {
    return (
        <header className='Header'>
            <TopBanner />
            <div className="inner">
                <h1>
                    <Link to='/'>
                        <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt="" />
                    </Link>
                </h1>
                <nav>
                    <Nav />
                </nav>
                <ul className='submenu'>
                    <li><Link to='/'>login</Link></li>
                    <li><Link to='/'>join</Link></li>
                </ul>
                <ul className="subicon">
                    <li><Link to='/'><AiOutlineSearch /></Link></li>
                    <li><Link to='/'><AiOutlineShoppingCart /></Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header
