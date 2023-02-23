import { Routes, Route } from 'react-router-dom';

import Home from '../routes/Home';
import About from '../routes/About';
import NotMatch from '../routes/NotMatch';
import Navbar from './Navbar';

const TodoApp = () => (
  <Routes>
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<NotMatch />} />
    </Route>
  </Routes>
);
export default TodoApp;
