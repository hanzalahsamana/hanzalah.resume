import React, { useContext } from 'react';
import './index.scss'
import TypedText from "../TypedText";
import SocialLinks from "../SocialLinks";
import Info from "../Info";
import Skills from "../Skills";
import {ThemeContext} from "../../context/ThemeContext";
import {useAnimation} from "../../use/animation";
import profile from './../../assets/profile.png';

const Profile = () => {
    const { backgroundImage, type } = useContext(ThemeContext);
    const { animation } = useAnimation();
    return (
        <div className="profile">
            <div className="profile__banner">
                <div className={`profile__photo ${animation}`} style={{backgroundImage: `url(${backgroundImage})`}} />
                <img src={profile} alt={type} />
            </div>
            <div className="profile__content">
                <div className="profile__title">
                    Hanzalah Imran
                </div>
                <TypedText
                  dataText={
                      [
                          'JavaScript Engineer',
                          'Frontend Development',
                          'React Developer'
                      ]
                  }
                />
                <SocialLinks/>
                <Info icon="location">
                    Karachi / Pakistan
                </Info>
                <Skills />
            </div>
            <div className="profile__contact">
                {/* <a href="https://drive.google.com/file/d/1hRNlqyLFOnDLrHDdCMNqQpp-Z3V6_bd_/view?usp=sharing" target="_blank" rel="noreferrer">
                        <span>
                            Download CV
                        </span>
                </a> */}
                <a href="mailto:hanzalahsamana789@gmail.com">
                        <span>
                            Contact Me
                        </span>
                </a>
            </div>
        </div>
    );
};

export default Profile;
