import { StyledAppContainer } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image, openModal }) => {
  const handleImageClick = () => {
    openModal(image);
  };

  return (
    <StyledAppContainer onClick={handleImageClick}>
      <img src={image.webformatURL} alt={image.tags} />
    </StyledAppContainer>
  );
};
