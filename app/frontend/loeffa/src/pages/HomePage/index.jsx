import axios from 'axios';
import { useState, useEffect } from 'react';
import Cards from '../../components/Cards';

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
      <Cards rooms={rooms} />
    </div>
  );
}

export default HomePage;
