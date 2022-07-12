import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Event from './pages/Event';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" component={Home} /> */}
        <Route path="/event" element={<Event />} />
        <Route path="/event/lesson/:slug" element={<Event />} />
      </Routes>
    </BrowserRouter>
  );
}
