import axios from 'axios';
import { useState, useEffect } from 'react';
import Cards from '../../components/Cards';
import Header from '../../components/Header';

function HomePage() {
  const [rooms, setRooms] = useState([]);

  const apiFetch = async () => {
    const { data } = await axios.get('http://127.0.0.1:8000/api/workstation/');
    setRooms(data);
  };

  useEffect(() => {
    apiFetch();
  }, []);

  return (
    <div>
      <Header />
      <Cards rooms={rooms} />
    </div>
  );
}

export default HomePage;
