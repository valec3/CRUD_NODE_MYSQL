import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, ReportGeneral, ReportGeographic, ReportIssues } from './pages';
import PieGraphic from './components/PieGraphic';
function App() {
    return (
        <main className="bg-[#18181b] h-screen w-screen overflow-y-auto">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/reporte/general"
                        element={<ReportGeneral />}
                    />
                    <Route path="/reporte/issues" element={<ReportIssues />} />
                    <Route
                        path="/reporte/geografia"
                        element={<ReportGeographic />}
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
