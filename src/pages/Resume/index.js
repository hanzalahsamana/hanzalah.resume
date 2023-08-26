import React from 'react';
import moment from 'moment';
import Title from "../common/Title";
import './index.scss';
import ResumeItem from "./Item";

const Resume = () => {
    return (
        <div className="page" id="resume">
            <Title icon={'fa fa-briefcase'}>
                Resume - Total Commercial Experience {moment().diff('01/01/2021', 'years', true).toFixed(2)} years
            </Title>
            <ResumeItem
                date={'Nov 2022 – July 2023'}
                title={'Software Engineer'}
                company={'Webners'}
                logo={''}
            >
                • Work on front-end with extensive use of React and native JavaScript for developing Website and Hybrid Mobile Apps.
            </ResumeItem>
            <ResumeItem
                date={'Feb 2021'}
                title={'Frontend Developer'}
                company={'Pairdesk'}
                logo={''}
            >
                • Develop clean, maintainable, and highly interactive single-page web applications using Javascript, TypeScript, React, HTML, SASS.
            </ResumeItem>
            <ResumeItem
                date={'Jan 2021 – Jan 2023'}
                title={'Full Stack Developer'}
                company={'Cluster Valley'}
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
                date={'2022 – present'}
                title={'Virtual University of Pakistan'}
                company={'Karachi'}
                logo={''}
            >
                Bachelor's Degree in Software Engineering
            </ResumeItem>
        </div>
    );
};

export default Resume;
