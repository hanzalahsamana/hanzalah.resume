import React from 'react';
import moment from 'moment';
import Title from "../common/Title";
import './index.scss';
import ResumeItem from "./Item";

const Resume = () => {
    return (
        <div className="page" id="resume">
            <Title icon={'fa fa-briefcase'}>
                Resume - Total Commercial Experience {moment().diff('01/02/2018', 'years', true).toFixed(2)} years
            </Title>
            <ResumeItem
                date={'Feb 2018 – Present'}
                title={'Lead Software Engineer'}
                company={'IOMechs'}
                logo={''}
            >
                • Work on front-end with extensive use of Angular, React and native JavaScript for developing Website and Hybrid Mobile Apps.
            </ResumeItem>
            <ResumeItem
                date={'Feb 2021'}
                title={'Frontend Developer'}
                company={'Pairdesk'}
                logo={''}
            >
                • Develop clean, maintainable, and highly interactive single-page web applications using Javascript, TypeScript, Angular, HTML, SASS.
            </ResumeItem>
            <ResumeItem
                date={'July 2017 – Jan 2018'}
                title={'Full Stack Developer'}
                company={'Panacloud'}
                logo={''}
            >
                • Developed clean, maintainable and highly interactive single page web applications using Javascript, TypeScript, React, HTML, SASS.. <br/>
                • Developed Hybrid Mobile Applications. <br/>
                • Worked the backend by using Node JS, Express and Mongo DB, Firebase. <br/>
            </ResumeItem>
            <Title icon={'fa fa-university'}>
                Education
            </Title>
            <ResumeItem
                date={'2015 – 2018'}
                title={'University of Karachi - UBIT'}
                company={'Karachi'}
                logo={''}
            >
                Bachelor's Degree in Software Engineering
            </ResumeItem>
        </div>
    );
};

export default Resume;
