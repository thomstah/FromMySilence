import { Route, Routes } from "react-router";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home"
import { CreateMessage } from "./pages/CreateMessage"
import { Terms } from "./pages/Terms"
import { About } from "./pages/About"

function App() {
  return (
    <div>
        <Navbar />
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<CreateMessage/>} />
                <Route path="/about" element={<About />} />
                <Route path="/terms" element={<Terms />} />

            </Routes>
        </div>
    </div>
  );
}

export default App;