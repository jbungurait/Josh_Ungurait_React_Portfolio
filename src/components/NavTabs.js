import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <ul className='nav nav-tabs'>
            <li className='nav-item'>
                <a href='#aboutMe'
                onClick={() => handlePageChange('AboutMe')}
                className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
                ><h2>About Me</h2></a>
            </li>
            <li className='nav-item'>
                <a href='#portfolio'
                onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                ><h2>Portfolio</h2></a>
            </li>
            <li className='nav-item'>
                <a href='#resume'
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                ><h2>Resume</h2></a>
            </li>
            <li className='nav-item'>
                <a href='#contact'
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                ><h2>Contact</h2></a>
            </li>
        </ul>
    );
};

export default NavTabs;