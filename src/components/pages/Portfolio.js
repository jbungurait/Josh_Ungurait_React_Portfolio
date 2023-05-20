import React from 'react';
import '../../assets/css/style.css';

export default function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            <div className='card text-center'>
                <div className='card-header'>
                    <h2>Adventure Finder</h2>
                </div>
                <div className='card-body'>
                    <img src="../assets/images/Adventure_Finder_screenshot.jpg"></img>
                </div>
            </div>
        </div>
    )
}