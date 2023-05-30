import StyledBookButton from './StyledBookButton';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

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

BookButton.propTypes = {
  buttonClick: PropTypes.func.isRequired,
};

export default BookButton;
