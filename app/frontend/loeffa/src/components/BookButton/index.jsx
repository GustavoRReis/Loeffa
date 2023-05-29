import StyledBookButton from './StyledBookButton';
import Button from '@material-ui/core/Button';

function BookButton({ buttonClick }) {
  return (
    <StyledBookButton>
      <div>
        <Button onClick={buttonClick} variant="contained" color="primary">
          Fazer nova reserva
        </Button>
      </div>
    </StyledBookButton>
  );
}

export default BookButton;
