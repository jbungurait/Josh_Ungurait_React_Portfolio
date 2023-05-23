import React from 'react';
import '../../assets/css/Portfolio.css';
import AF from '../../assets/images/AF_screenshot.jpg';
import TEP from '../../assets/images/Text-Edit-Pro.png'

const styles = {
    PortfolioStyle: {
        width: '50%',
    },
};

export default function Portfolio() {
    return (
        <div >
            <h1>Portfolio</h1>
            <div className='card' style={styles.PortfolioStyle}>
                <div className='card-header'>
                    <h2>Adventure Finder</h2>
                </div>
                <div className='card-body'>
                    <img src={AF} 
                    className='img-fluid'
                    href='https://jbungurait.github.io/Adventure_Finder/'></img>
                </div>
            </div>
            <div className='card' style={styles.PortfolioStyle}>
                <div className='card-header'>
                    <h2>Text Edit Pro</h2>
                </div>
                <div className='card-body'>
                    <img src={TEP} 
                    className='img-fluid'
                    href='https://github.com/jbungurait/Text-Edit-Pro'></img>
                </div>
            </div>
        </div>
    )
}