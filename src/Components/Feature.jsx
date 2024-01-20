import React from "react";
import image1 from '../images/1.svg';
import image2 from '../images/2.svg';
import image3 from '../images/3.svg';
import image4 from '../images/4.svg';
import FeatureBox from "./Featurebox";



function Feature() {
    return (
        <div id="features">
            <h1>FEATURES</h1>
            <div className="a-container">
                <FeatureBox image={image1} title='Weight Lifting' />
                <FeatureBox image={image2} title='Specific Muscle' />
                <FeatureBox image={image3} title='Flex Your Muscle' />
                <FeatureBox image={image4} title='Cardio Exercise' />
            </div>
        </div>
    );
}

export default Feature;