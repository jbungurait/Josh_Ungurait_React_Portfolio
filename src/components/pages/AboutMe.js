import React from 'react';
import '../../assets/css/AboutMe.css';
import Headshot from '../../assets/images/IMG_2056.jpg';

const styles = {
    imgStyle: {
        margin: '10px',
        padding: '10px',
    }
}

export default function AboutMe() {
    return (
        <div className='content'>
            <h1>Josh Ungurait</h1>
            <div className='image'>
                <img className="headshot" style={styles.imgStyle} src={Headshot}></img>
            </div>
            <h3>About Me</h3>
            <p>
                Hello! My name is Josh Ungurait. I currently live in Seattle, WA with my dog June. I graduated college in 
                Nashville, TN with a Bachelor's of Fine Art in Photography. For the last 3 years I've been working for a fly fishing rod manufacturor 
                on Bainbridge Island, WA. I love the outdoors and it has been a very rewarding process to learn the ins and outs of 
                our high detail process. I started coding in high school leaning C++ and added to my skills while getting my
                Bachelor's degree in Photography. During that time I leaned HTML and CSS with the goal of designing my own professional 
                website. I recently completed a Full Stack Web Developer program at the University of Washington. I had an absolute blast 
                in the program adding greatly to my skills in web development. It was a very rewarding process that contiuously challenged 
                me to learn and adapt to the ever changing demands of a growing technical field. 
            </p>
           
        </div>
    );
};