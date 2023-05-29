import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import StyledCards from './StyledCards';

function Cards({ rooms, reservar }) {
  return (
    <StyledCards>
      <div className="card-container">
        {rooms.map((index, number) => (
          <div className="card" key={number}>
            <img
              className="card-image"
              src="https://d1y4va1nna2r1p.cloudfront.net/spaces/46054eef-2fee-4b52-b084-2f05cd3aa9c5.jpeg"
              alt="imagem-sala"
            ></img>
            <p className="card-title">{index.workstation.name}</p>
            {index.workstation.available ? (
              <div>
                <p className="card-status1">Reservado</p>
                <p> Reservado por: {index.name_user} </p>
              </div>
            ) : (
              <div>
                <p className="card-status2">Disponível</p>
                <button
                  name={index.workstation.name}
                  onClick={reservar}
                  /* variant="contained"
                  color="primary" */
                >
                  Reservar
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </StyledCards>
  );
}

Cards.propTypes = {
  rooms: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      available: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default Cards;
