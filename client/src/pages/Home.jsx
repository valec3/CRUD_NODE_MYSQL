import { Link } from 'react-router-dom';
import Graphics from './Graphics';

const Home = () => {
    return (
        <section className="flex flex-col items-center justify-center py-3 ">
            <h1 className="font-bold text-yellow-400 text-[2rem] border-b-[2px] border-gray-200 px-5">
                Modulo de reporte
            </h1>
            <p className="mt-6 text-center text-white text-xl">
                Bienvenido al módulo de reporte. Aquí puedes acceder a
                diferentes funciones y generar informes para análisis.
            </p>
            <div className="text-white font-semibold mt-5 flex gap-6 flex-wrap justify-center max-w-[1200px]">
                <Link to="/reporte/general" className="btn-dashboard-principal">
                    Información general
                </Link>
                <Link to="/reporte/issues" className="btn-dashboard-principal">
                    Respuestas y disputas
                </Link>
                <Link
                    to="/reporte/geografia"
                    className="btn-dashboard-principal"
                >
                    Geografía y tiempo:
                </Link>
            </div>
        </section>
    );
};

export default Home;
