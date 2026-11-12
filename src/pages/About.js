

import React from 'react';
import Photo from '../components/Photo.js';

function About() {
    return (
        <div className="wrap">
            <div className="about">
                <div className="pics">
                    <Photo name="pic4.jpg" />
                    <Photo name="pic7.jpg" />
                </div>

                <div>
                    <h1 className="page-title">About GRILLO</h1>

                    <p>
                        At GRILLO, we believe that great food brings people
                        together. Our passion is serving delicious breakfast
                        and lunch made with care, fresh ingredients, and a
                        commitment to quality.
                    </p>

                    <p>
                        From a satisfying breakfast to a flavorful lunch,
                        every meal is an opportunity to enjoy authentic
                        taste and create memorable moments.
                    </p>

                    <p>
                        We strive to make every visit special by combining
                        great flavors, quality ingredients, and a welcoming
                        atmosphere.
                    </p>

                    <div className="sig">
                        GRILLO — Fresh Taste, Great Moments, Made with Love.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;