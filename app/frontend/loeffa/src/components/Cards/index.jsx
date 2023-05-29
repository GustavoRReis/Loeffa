import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import StyledCards from './StyledCards';

function Cards({ rooms, reservar, teste }) {
  return (
    <StyledCards>
      <div className="card-container">
        {rooms.map((room, index) => (
          <div className="card" key={index}>
            <img
              className="card-image"
              src="https://d1y4va1nna2r1p.cloudfront.net/spaces/46054eef-2fee-4b52-b084-2f05cd3aa9c5.jpeg"
              alt="imagem-sala"
            />
            <p className="card-title">{room.workstation.name}</p>
            {room.workstation.available ? (
              <div>
                <p className="card-status1">Reservado</p>
                <p>Reservado por: {room.name_user}</p>
                {teste && (
                  <button
                    className="button-cancel"
                    name={room.workstation.name}
                    onClick={reservar}
                  >
                    Cancelar
                  </button>
                )}
              </div>
            ) : (
              <div>
                <p className="card-status2">Disponível</p>
                <button
                  name={room.workstation.name}
                  onClick={reservar}
                  className="button-booking"
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
      workstation: PropTypes.shape({
        name: PropTypes.string.isRequired,
        available: PropTypes.bool.isRequired,
      }).isRequired,
      name_user: PropTypes.string,
    })
  ).isRequired,
};

export default Cards;
