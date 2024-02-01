import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Countries, Home, ReportGeneral } from './pages';
import PieGraphic from './components/PieGraphic';
function App() {
    return (
        <main className="bg-[#18181b] h-screen w-screen overflow-y-auto">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/countries" element={<Countries />} />
                    <Route
                        path="/reporte/general"
                        element={<ReportGeneral />}
                    />
                </Routes>
            </BrowserRouter>
            <div>
                <PieGraphic />
            </div>
        </main>
    );
}

export default App;
