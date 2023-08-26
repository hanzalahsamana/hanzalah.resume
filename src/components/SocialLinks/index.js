import React from 'react';
import './index.scss';

const SocialLinks = () => {
    return (
        <div className="social">
            <SocialLinks.Link
                url={'https://github.com/hanzalahsamana'}
                type={'github'}
            />
            <SocialLinks.Link
                url={'https://www.linkedin.com/in/hanzalah-samana-9557551b6/'}
                type={'linkedin'}
            />
            <SocialLinks.Link
                url={'https://join.skype.com/invite/uiAYeCPVGAMd'}
                type={'skype'}
            />
        </div>
    );
};



SocialLinks.Link = ({url, type}) => <a href={url} target="_blank" ><span className={`fab fa-${type}`} /></a>
;

export default SocialLinks;
