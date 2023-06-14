import React from 'react';
import '../../assets/css/Portfolio.css';
import AdventureFinder from '../../assets/images/AF_screenshot.jpg';
import TextEditPro from '../../assets/images/Text-Edit-Pro.png';
import READMEGen from '../../assets/images/READMEGen.png';
import WeatherDashboard from '../../assets/images/WeatherDashboard.png';
import SleepSync from '../../assets/images/SleepSync.png';
import StreamVerse from '../../assets/images/StreamVerse.png';

const styles = {
    PortfolioStyle: {
        width: '45%',
    },
    titleStyles: {
        textDecoration: 'none',
        color: 'black',
    }
};

export default function Portfolio() {
    return (
        <div className='content'>
            <h1>Portfolio</h1>
            <div className='row'>
                
            <div className='card' style={styles.PortfolioStyle}>
            <a href='https://jbungurait.github.io/Adventure_Finder/'>
                <div className='card-header'>
                    <h3 style={styles.titleStyles}>Adventure Finder</h3>
                </div>
                <div className='card-body'>
                    <img src={AdventureFinder} 
                    className='img-fluid'
                    ></img>
                </div>
                </a>
            </div>
           
            <div className='card' style={styles.PortfolioStyle}>
                <a  href='https://text-edit-pro.herokuapp.com/'>
                <div className='card-header'>
                    <h3 style={styles.titleStyles}>Text Edit Pro</h3>
                </div>
                <div className='card-body'>
                    <img src={TextEditPro} 
                    className='img-fluid'
                   ></img>
                </div>
                </a>
            </div>
            
            </div>
            <div className='row'>
            <div className='card' style={styles.PortfolioStyle}>
                <a  href='https://jbungurait.github.io/My-Weather-Dashboard/'>
                <div className='card-header'>
                    <h3 style={styles.titleStyles}>Weather Dashboard</h3>
                </div>
                <div className='card-body'>
                    <img src={WeatherDashboard} 
                    className='img-fluid'
                   ></img>
                </div>
                </a>
            </div>
            <div className='card' style={styles.PortfolioStyle}>
                <a href='https://github.com/jbungurait/README_Generator'>
                <div className='card-header'>
                    <h3 style={styles.titleStyles}>README Generator</h3>
                </div>
                <div className='card-body'>
                    <img src={READMEGen} 
                    className='img-fluid'
                    ></img>
                </div>
                </a>
            </div>
            </div>
            <div className='row'>
            <div className='card' style={styles.PortfolioStyle}>
                <a href='https://sleep--sync.herokuapp.com/'>
                <div className='card-header'>
                    <h3 style={styles.titleStyles}>SleepSync</h3>
                </div>
                <div className='card-body'>
                    <img src={SleepSync} 
                    className='img-fluid'
                    ></img>
                </div>
                </a>
            </div>
            <div className='card' style={styles.PortfolioStyle}>
                <a href='https://github.com/kylearmour1/StreamVerse'>
                <div className='card-header'>
                    <h3 style={styles.titleStyles}>StreamVerse</h3>
                </div>
                <div className='card-body'>
                    <img src={StreamVerse} 
                    className='img-fluid'
                    ></img>
                </div>
                </a>
            </div>
            </div>
        </div>
    )
}