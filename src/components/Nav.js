import React from 'react';
import { Link } from 'react-router-dom';

const NAVLINK = [
    { id: 1, title: "new", link: "#!" },
    { id: 2, title: "best", link: "#!" },
    { id: 3, title: "product", link: "#!" },
    { id: 4, title: "event", link: "#!" },
    { id: 5, title: "review", link: "#!" },
    { id: 6, title: "how to", link: "#!" }
]
const Nav = () => {
    return (
        <ul className='Gnb'>
            {
                NAVLINK.map(it => {
                    return (
                        <li key={it.id}><Link to={it.link}>{it.title}</Link></li>
                    )
                })
            }
        </ul>
    )
}

export default Nav;
