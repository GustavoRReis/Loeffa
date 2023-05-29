import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Book from './pages/Book';
import HomePage from './pages/HomePage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservas" element={<Book />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
