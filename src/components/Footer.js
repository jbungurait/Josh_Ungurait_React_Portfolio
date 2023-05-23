import React from 'react';
import GitHub from '../assets/images/github-logo.png';
import LinkedIn from '../assets/images/linkedIn-Logo.png';

const styles = {
    footerStyles: {
        position: 'static',
        display: 'block',
        bottom: '0px',
    },
    imgStyles: {
        maxHeight: '100px',
        maxWidth: '100px',
    }

}

export default function Footer() {
    return (
        <footer className='' style={styles.footerStyles}>
            <a href='https://github.com/jbungurait'>
            <img 
            src={GitHub} 
            style={styles.imgStyles}
            className='img-thumbnail'
            ></img></a>
            <a href='https://www.linkedin.com/in/josh-ungurait-0045b352/'>
            <img
            src={LinkedIn} 
            style={styles.imgStyles}
            className='img-thumbnail'
            ></img></a>
        </footer>
    );
};