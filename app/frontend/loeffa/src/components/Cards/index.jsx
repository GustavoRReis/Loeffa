import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import StyledCards from './StyledCards';

function Cards({ rooms, isDataReservation, verifyButton }) {
  const [dataReceived, setDataReceived] = useState(false);

  useEffect(() => {
    if (rooms.length > 0) {
      setDataReceived(true);
    }
  }, [rooms]);

  return (
    <StyledCards>
      {dataReceived ? (
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
                  {verifyButton && (
                    <button
                      className="button-cancel"
                      name={room.workstation.name}
                      onClick={isDataReservation}
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
                    onClick={isDataReservation}
                    className="button-booking"
                  >
                    Reservar
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div>Carregando...</div>
      )}
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
  isDataReservation: PropTypes.func,
  verifyButton: PropTypes.bool,
};

export default Cards;
