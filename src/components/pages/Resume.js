import React from 'react';
import { Document, Page } from 'react-pdf';
import JoshResume from '../../assets/images/Resume_5_23.pdf';
import '../../assets/css/Resume.css';
import { PDFViewer } from '@react-pdf/renderer';

export default function Resume() {
    return (
        <div>
            <h1>Resume</h1>
            <p>
                <PDFViewer> 
                    <JoshResume />
            </PDFViewer>
            </p>
        </div>
    )
}