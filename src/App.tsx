import { Route } from 'react-router';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { SendLetter } from './pages/Send';
import { Terms } from './pages/Terms';
import { About } from './pages/About';
import { BrowserRouter } from 'react-router';

const basename = import.meta.env.DEV ? '/' : '/FromyMySilence';

function App() {
  return (
    <div className="flex min-h-screen">
      <Navbar />
      <div className="container mx-auto mt-5 px-4 py-6">
        <BrowserRouter basename={basename}>
          <h1>hello world</h1>
          <Route path="/" element={<Home />} />
          <Route path="/send" element={<SendLetter />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
