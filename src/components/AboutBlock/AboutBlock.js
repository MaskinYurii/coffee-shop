import React from 'react';

import './AboutBlock.scss';

function AboutBlock(props) {
    const {title, imgSrc} = props;
    return (
        <div className="about-info">
            <div className="about-info__container">
                <div className="about-info__img">
                    <img src={imgSrc} alt="image"/>
                </div>

                <div className="about-info__content">
                    <h2 className="title about-info__title">{title}</h2>
                    <div className="outline about-info__outline"></div>
                    <div className="about-info__text">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        <br/><br/>
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions.<br/>
                        As greatly removed calling pleased improve an. Last ask him cold feel<br/>
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                    </div>
                </div>
            </div>

            <div className="about-info__underline"></div>

        </div>
    );
}

export default AboutBlock;