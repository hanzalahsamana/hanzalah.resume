import React from 'react';
import './index.scss';

const SocialLinks = () => {
    return (
        <div className="social">
            <SocialLinks.Link
                url={'https://github.com/syedsaadqamar'}
                type={'github'}
            />
            <SocialLinks.Link
                url={'https://www.linkedin.com/in/syed-saad-qamar/'}
                type={'linkedin'}
            />
            <SocialLinks.Link
                url={'https://join.skype.com/invite/lbRysj6u1d6f'}
                type={'skype'}
            />
        </div>
    );
};



SocialLinks.Link = ({url, type}) => <a href={url} target="_blank" ><span className={`fab fa-${type}`} /></a>
;

export default SocialLinks;
