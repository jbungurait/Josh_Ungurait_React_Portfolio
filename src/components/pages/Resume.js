import React from 'react';
import JoshResume from '../../assets/images/Josh_Ungurait.pdf';
import '../../assets/css/Resume.css';


export default function Resume() {
    return (
        <div className='content'>
        <div className='resume'>
            <h1>Resume</h1>
               <object data={JoshResume} type="application/pdf" width="100%" height="1100px">
            {/* <p><a link={JoshResume}></a></p> */}
               </object>
        </div>
        </div>
    )
}