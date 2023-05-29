import { Button, Checkbox, TextField } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Cards from '../../components/Cards';
import Header from '../../components/Header';
import StyledBook from './StyledBook';

function Book() {
  const [rooms, setRooms] = useState([]);
  const [disponivel, setDisponivel] = useState(false);
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

  const cancelar = () => {
    setDisponivel(false);
  };

  const reservar = ({ target }) => {
   setPostRoom((prevPostRoom) => ({
     ...prevPostRoom,
     workstation: {
       ...prevPostRoom.workstation,
       name: target.name,
     },
   }));
    setDisponivel(true);
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



const enviarReserva = async () => {
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
    setDisponivel(false);
  } catch (error) {
    console.log('Erro ao enviar a reserva:', error);
  }
};



 return (
   <StyledBook>
     <div>
       <Header />
       {rooms.length > 0 ? (
         <div>
           <Cards rooms={rooms} reservar={reservar} />
           {disponivel && (
             <div className="overlay">
               <form>
                 <TextField
                   onChange={handleNameChange}
                   id="outlined-basic"
                   label="Nome"
                   variant="outlined"
                 />

                 <Checkbox onChange={handleCheckBoxChange} />
                 <Button
                   onClick={enviarReserva}
                   variant="contained"
                   color="primary"
                 >
                   Enviar
                 </Button>
                 <Button
                   onClick={cancelar}
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
