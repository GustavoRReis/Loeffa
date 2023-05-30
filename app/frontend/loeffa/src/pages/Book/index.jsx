import {
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Cards from '../../components/Cards';
import Header from '../../components/Header';
import StyledBook from './StyledBook';

function Book() {
  const [rooms, setRooms] = useState([]);
  const [available, setAvailable] = useState(false);
  const [postRoom, setPostRoom] = useState({
    workstation: {
      name: '',
      available: false,
    },
    name_user: '',
  });

  const apiFetch = async () => {
    const { data } = await axios.get('http://127.0.0.1:8000/api/booking/');
    const dataFiltered = data.filter((e) => e.workstation.available === false);
    setRooms(dataFiltered);
  };

  useEffect(() => {
    apiFetch();
  }, [postRoom]);

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

  const handleNameChange = ({ target }) => {
    setPostRoom((prevPostRoom) => ({
      ...prevPostRoom,
      name_user: target.value,
    }));
  };

  const handleCheckBoxChange = ({ target }) => {
    setPostRoom((prevPostRoom) => ({
      ...prevPostRoom,
      workstation: {
        ...prevPostRoom.workstation,
        available: target.checked,
      },
    }));
  };

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
      console.log('Erro ao enviar a reserva:', error);
    }
  };

   const clickModal = () => {
     Swal.fire(
       'Sucesso!',
       'Sua reserva foi realizada com sucesso!',
       'success'
     );
   };

  return (
    <StyledBook>
      <div>
        <Header />
        {rooms.length > 0 ? (
          <div>
            <Cards rooms={rooms} isDataReservation={isDataReservation} />
            {available && (
              <div className="overlay">
                <form>
                  <TextField
                    onChange={handleNameChange}
                    id="outlined-basic"
                    label="Nome"
                    variant="outlined"
                  />
                  <RadioGroup aria-label="timeOfDay" name="timeOfDay" row>
                    <FormControlLabel
                      value="manha"
                      control={<Radio />}
                      label="Manhã"
                    />
                    <FormControlLabel
                      value="tarde"
                      control={<Radio />}
                      label="Tarde"
                    />
                    <FormControlLabel
                      value="noite"
                      control={<Radio />}
                      label="Noite"
                    />
                  </RadioGroup>
                  <TextField id="start-date" type="date" variant="outlined" />
                  <TextField id="end-date" type="date" variant="outlined" />
                  <br />
                  <Checkbox onChange={handleCheckBoxChange} /> Confirmar
                  reserva
                  <br />
                  <Button
                    className="button-overlay"
                    onClick={sendBooking}
                    variant="contained"
                    color="primary"
                  >
                    Enviar
                  </Button>
                  <Button
                    className="button-overlay"
                    onClick={cancel}
                    variant="contained"
                    color="secondary"
                  >
                    Cancelar
                  </Button>
                </form>
              </div>
            )}
          </div>
        ) : (
          <div>Carregando...</div>
        )}
      </div>
    </StyledBook>
  );
}

export default Book;
