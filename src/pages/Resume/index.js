import React from 'react';
import moment from 'moment';
import Title from "../common/Title";
import './index.scss';
import ResumeItem from "./Item";
import upwork from '../../assets/logos/upwork.png'
import Xperiode from '../../assets/logos/xperiode.png'
import Zernoads from '../../assets/logos/zernods.png'
import Cluster from '../../assets/logos/cluster_valley_logo.png'
import noodev_logo from '../../assets/logos/noodev_logo.png'
import webners from '../../assets/logos/webners.png'
import Astric from '../../assets/logos/Astric.png'
import university from '../../assets/logos/University.png'

const Resume = () => {
    return (
        <div className="page" id="resume">
            <Title icon={'fa fa-briefcase'}>
                Resume - Total Commercial Experience {moment().diff('01/01/2019', 'years', true).toFixed(2)} years
            </Title>
            <ResumeItem
                date={'Aug 2022 – Present'}
                title={'Managing Director (CEO)'}
                company={'Xperiode'}
                logo={Xperiode}
            >
                • Oversee company operations and strategic direction as CEO. <br />
                • Lead full-stack development initiatives to drive innovative solutions. <br />
                • Foster collaboration across teams to achieve business goals. <br />
            </ResumeItem>

            <ResumeItem
                date={'Apr 2022 – Present'}
                title={'Full-stack Developer (Top Rated)'}
                company={'Upwork'}
                logo={upwork}
            >
                • Provide freelance full-stack development services with expertise in React.js and Node.js. <br />
                • Develop responsive applications using React Native and implement REST APIs. <br />
                • Maintain top-rated status through high-quality work and client satisfaction. <br />
            </ResumeItem>

            <ResumeItem
                date={'Jan 2024 – Jul 2024'}
                title={'Senior Software Engineer'}
                company={'Noodev'}
                logo={noodev_logo}
            >
                • Developed full-stack applications using AngularJS and React.js. <br />
                • Managed version control and collaboration through GitLab. <br />
                • Contributed to front-end development, enhancing user interfaces and experiences. <br />
            </ResumeItem>

            <ResumeItem
                date={'Feb 2024 – Jun 2024'}
                title={'Senior Frontend Developer'}
                company={'Astric'}
                logo={Astric}
            >
                • Led front-end development using Next.js and React.js to build dynamic web applications. <br />
                • Utilized server-side JavaScript to enhance application performance and SEO. <br />
                • Collaborated with cross-functional teams to deliver high-quality user experiences. <br />
            </ResumeItem>

            <ResumeItem
                date={'Feb 2023 – Nov 2023'}
                title={'Software Engineer (Part-time)'}
                company={'Zernoads'}
                logo={Zernoads}
            >
                • Developed mobile applications using React Native. <br />
                • Engaged in full-stack development with React.js, Node.js, and Redux. <br />
                • Implemented REST APIs for frontend and backend integration. <br />
                • Enhanced user experience with React.js and JavaScript. <br />
            </ResumeItem>

            <ResumeItem
                date={'Nov 2022 – July 2023'}
                title={'Software Engineer'}
                company={'Webners'}
                logo={webners}
            >
                • Worked on front-end with extensive use of React and native JavaScript for developing websites and hybrid mobile apps. <br />
            </ResumeItem>

            <ResumeItem
                date={'Jan 2021 – Jan 2023'}
                title={'Full Stack Developer'}
                company={'Cluster Valley'}
                logo={Cluster}
            >
                • Developed clean, maintainable, and highly interactive single-page web applications using JavaScript, TypeScript, React, HTML, and SASS. <br />
                • Developed hybrid mobile applications. <br />
                • Worked on the backend using Node.js, Express, MongoDB, and Firebase. <br />
            </ResumeItem>

            <Title icon={'fa fa-university'}>
                Education
            </Title>
            <ResumeItem
                date={'2022 – present'}
                title={'Virtual University of Pakistan'}
                company={'Karachi'}
                logo={university}
            >
                Bachelor's Degree in Software Engineering
            </ResumeItem>
        </div>
    );
};

export default Resume;
