import { StyledButton } from './Button.styled';

export const Button = ({ onClick, disabled }) => {
  return (
    <StyledButton type="button" onClick={onClick} disabled={disabled}>
      Load more
    </StyledButton>
  );
};
