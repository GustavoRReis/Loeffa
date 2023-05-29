import axios from 'axios';
import { useState, useEffect } from 'react';
import BookButton from '../../components/BookButton';
import Cards from '../../components/Cards';
import Header from '../../components/Header';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);

  const apiFetch = async () => {
    const { data } = await axios.get('http://127.0.0.1:8000/api/booking/');
    const dataFiltered = data.filter((e) => e.workstation.available === true);
    console.log(dataFiltered)
    setRooms(dataFiltered);
  };

  useEffect(() => {
    apiFetch();
  }, []);

  const buttonClick = (e) => {
    e.preventDefault();
    navigate('/booking');
  };

  return (
    <div>
      <Header />
      <BookButton buttonClick={buttonClick} />
      <Cards rooms={rooms} />
    </div>
  );
}

HomePage.propTypes = {
  navigate: PropTypes.func.isRequired,
};



export default HomePage;
