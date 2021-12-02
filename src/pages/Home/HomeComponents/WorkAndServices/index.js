import image1 from '../../../../images/Photo1_Scenery.jpg'
import image2 from '../../../../images/Photo2_Path.jpg'
import image3 from '../../../../images/Photo3_Forest.jpg'
import image4 from '../../../../images/Photo4_Twilight.jpg'

import { WorkServicesContainer, Work, Services, Heading, ImagesConatainer, Image, Features,
    FeatureInfo, FeatureHeading, FeatureDescription } from './WorkAndServicesStyled'
    
const WorkAndServices = () => {
    return (
        <>
          <WorkServicesContainer>
                <Work>
                    <Heading>Recent Work</Heading>
                    <ImagesConatainer>
                        <Image src={ image1 } alt="Scenery Image" />
                        <Image src={ image2 } alt="Path Image" />
                        <Image src={ image3 } alt="Forest Image" />
                        <Image src={ image4 } alt="Twilight Image" />
                    </ImagesConatainer>
                </Work>
                <Services>
                    <Heading>Featured Services</Heading>
                    <Features>
                        <FeatureInfo>
                        <FeatureHeading>Feature 1</FeatureHeading>
                            <FeatureDescription>Lorem ipsum dolor sit amet consectetur adipisicing</FeatureDescription>
                        </FeatureInfo>
                        <FeatureInfo>
                        <FeatureHeading>Feature 2</FeatureHeading>
                            <FeatureDescription>Lorem ipsum dolor sit amet consectetur adipisicing</FeatureDescription>
                        </FeatureInfo>
                        <FeatureInfo>
                        <FeatureHeading>Feature 3</FeatureHeading>
                            <FeatureDescription>Lorem ipsum dolor sit amet consectetur adipisicing</FeatureDescription>
                        </FeatureInfo>
                        <FeatureInfo>
                        <FeatureHeading>Feature 4</FeatureHeading>
                            <FeatureDescription>Lorem ipsum dolor sit amet consectetur adipisicing</FeatureDescription>
                        </FeatureInfo>
                    </Features>
                </Services>
            </WorkServicesContainer>  
        </>
    )
}

export default WorkAndServices
