import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Book from './pages/Book';
import HomePage from './pages/HomePage';
import Reservations from './pages/Reservations';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<Book />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
