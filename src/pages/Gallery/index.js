import image from '../../images/SampleImage.png'

import { Heading, GalleryContainer, Image } from './GalleryStyled'

const Gallery = () => {
    return ( 
        <>
        <Heading>Gallery</Heading>
        <GalleryContainer>
            <Image src={ image } alt="Image" />
            <Image src={ image } alt="Image" />
            <Image src={ image } alt="Image" />
            <Image src={ image } alt="Image" />
            <Image src={ image } alt="Image" />
            <Image src={ image } alt="Image" />
        </GalleryContainer> 
        </>
     );
}
 
export default Gallery;