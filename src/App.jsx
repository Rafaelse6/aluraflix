import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"; 
import NewVideo from "./components/NewVideoForm";
import EditCard from "./components/EditCard"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Página inicial */}
        <Route path="/novo-video" element={<NewVideo />} />
        <Route path="/editar-video/:id" element={<EditCard />} />
      </Routes>
    </Router>
  );
}

export default App;
