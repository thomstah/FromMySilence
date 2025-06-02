import { Route, Routes } from 'react-router';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { SendMessage } from './pages/Send';
import { Terms } from './pages/Terms';
import { About } from './pages/About';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/send" element={<SendMessage />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
