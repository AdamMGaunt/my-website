import * as React from 'react';

import { 
    HeroSection, 
    HeroTitle, 
    HeroSubheading, 
} from '../components/layout';

import { HeroContent } from '../content/Projects';

const Hero: React.FC = () => {
    return (
        <>
            <HeroSection>
                <div className="Colour-Bar"></div>
                <HeroTitle>
                    {HeroContent.name}
                </HeroTitle>
                <HeroSubheading>
                    {HeroContent.subheading}
                </HeroSubheading>
            </HeroSection>
        </>
    )
}
export default Hero