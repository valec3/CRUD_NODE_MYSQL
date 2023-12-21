import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Countries from "./pages";
function App() {
  return (
    <main className="bg-slate-700 h-screen w-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Hola mundo</h1>} />
          <Route path="/countries" element={<Countries />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
