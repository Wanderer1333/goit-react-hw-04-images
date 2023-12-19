import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { StyledImageGallery } from './ImageGallery.styled';

export const ImageGallery = ({ images, openModal }) => {
  return (
    <StyledImageGallery>
      {images.map((image, index) => (
        <ImageGalleryItem
          key={index}
          image={image}
          openModal={() => openModal(image.largeImageURL)}
        />
      ))}
    </StyledImageGallery>
  );
};
