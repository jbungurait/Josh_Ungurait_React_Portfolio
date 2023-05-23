import React from 'react';
import '../../assets/css/AboutMe.css';
import Headshot from '../../assets/images/IMG_2056.jpg';

const styles = {
    imgStyle: {
        scale: '50%',

    }
}

export default function AboutMe() {
    return (
        <div>
            <h1>About Me!</h1>
            <p>
                Hello! My name is Josh Ungurait. I currently live in downtown Seattle
                with my dog June. I've been in Washington State for 3 years now after graduating from
                college in Nashville, TN. I have a degree in photography and love going to see live shows.
                For the last 3 years I've been working for a fly fishing rod manufacturor on Bainbridge Island. 
                I love the outdoors and it has been a very rewarding process to learn the ins and outs of 
                our high detail process. I've been learing how to fly fish as well. I have been web coding for the 
                last 6 months and have learned a lot. 
            </p>
            <img style={styles.imgStyle} src={Headshot}></img>
        </div>
    );
};