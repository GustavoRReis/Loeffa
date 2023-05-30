import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Cards from '../../components/Cards';
import { Button } from '@material-ui/core';
import StyledReservations from './StyledReservations';
import Swal from 'sweetalert2';

function Reservations() {
  const [rooms, setRooms] = useState([]);
  const [verifyButton, setVerifyButton] = useState(false);
  const [available, setAvailable] = useState(false);
  const [postRoom, setPostRoom] = useState({
    workstation: {
      name: '',
      available: false,
    },
    name_user: 'null',
    entry_date: '',
    departure_date:''
  });

  const apiFetch = async () => {
    const { data } = await axios.get('http://127.0.0.1:8000/api/booking/');
    const dataFiltered = data.filter((e) => e.workstation.available === true);
    setRooms(dataFiltered);
  };

  useEffect(() => {
    apiFetch();
    setVerifyButton(true);
  }, [postRoom]);


  const sendBooking = async () => {
    try {
      const { name } = postRoom.workstation;
      const workstation = rooms.find((room) => room.workstation.name === name);
      const urlParts = workstation.url.split('/');
      const id = urlParts[urlParts.length - 2];
      const url = `http://127.0.0.1:8000/api/booking/${id}/`;
      await axios.put(url, postRoom);
      setPostRoom({
        workstation: {
          name: '',
          available: false,
        },
        name_user: '',
      });
      setAvailable(false);
      clickModal();
    } catch (error) {
      console.log('Erro ao enviar a reserva:', error.response.data);
    }
  };

  const cancel = () => {
    setAvailable(false);
  };

  const isDataReservation = ({ target }) => {
    setPostRoom((prevPostRoom) => ({
      ...prevPostRoom,
      workstation: {
        ...prevPostRoom.workstation,
        name: target.name,
      },
    }));
    setAvailable(true);
  };

  const clickModal = () => {
    Swal.fire('Reserva cancelada!', 'Sua reserva foi cancelada com sucesso!', 'success');
  }


  return (
    <StyledReservations>
      <div>
        <Header />
        {rooms.length > 0 && (
          <Cards
            rooms={rooms}
            verifyButton={verifyButton}
            isDataReservation={isDataReservation}
          />
        )}
        {available && (
          <div className="overlay">
            <form>
              <Button
                onClick={sendBooking}
                variant="contained"
                color="primary"
              >
                Cancelar Reserva
              </Button>
              <Button onClick={cancel} variant="contained" color="secondary">
                Voltar
              </Button>
            </form>
          </div>
        )}
      </div>
    </StyledReservations>
  );
}

export default Reservations;
