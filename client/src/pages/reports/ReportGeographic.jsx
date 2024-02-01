import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MyCustomTable from '../../components/MyCustomTable';
import {
    getReportGeographicDistribution,
    getReportResponseTime,
    getReportFrequencyComplaints,
} from '../../services/api';

const ReportGeographic = () => {
    const [dataGeographicDistribution, setDataGeographicDistribution] =
        useState([]);
    const [dataResponseTime, setDataResponseTime] = useState([]);
    const [dataFrequencyComplaints, setDataFrequencyComplaints] = useState([]);
    useEffect(() => {
        const getDataGeographicDistribution = async () => {
            const data = await getReportGeographicDistribution();
            setDataGeographicDistribution(data);
        };
        getDataGeographicDistribution();
    }, []);
    useEffect(() => {
        const getDataResponseTime = async () => {
            const data = await getReportResponseTime();
            setDataResponseTime(data);
        };
        getDataResponseTime();
    }, []);
    useEffect(() => {
        const getDataFrequencyComplaints = async () => {
            const data = await getReportFrequencyComplaints();
            setDataFrequencyComplaints(data);
            console.log(data);
        };
        getDataFrequencyComplaints();
    }, []);
    return (
        <section className="mt-8 px-6">
            <div>
                <div className="mt-8 ml-8">
                    <Link
                        to="/"
                        className="bg-red-600 uppercase font-bold text-xl text-white rounded-md px-3 py-2 w-fit hover:bg-red-800 transition-all duration-300"
                    >
                        {''}
                        Volver al inicio{' '}
                    </Link>
                </div>
                <MyCustomTable
                    columns={[
                        { field: 'StateName', headerName: 'Nombre de estado' },
                        { field: 'TotalQuejas', headerName: 'Total quejas' },
                    ]}
                    data={dataGeographicDistribution}
                    keyValue={'StateName'}
                    nameTable="Distribución geográfica de quejas"
                />
            </div>
            <div>
                <MyCustomTable
                    columns={[
                        { field: 'Company', headerName: 'Queja' },
                        { field: 'TimelyResponse', headerName: 'Inquietud' },
                        { field: 'TotalQuejas', headerName: 'Total' },
                    ]}
                    data={dataResponseTime}
                    keyValue={'Company'}
                    nameTable="Tiempo de respuesta por empresa"
                />
            </div>
            <div>
                <MyCustomTable
                    columns={[
                        { field: 'Year', headerName: 'Año' },
                        { field: 'Month', headerName: 'Mes' },
                        { field: 'TotalQuejas', headerName: 'Total quejas' },
                    ]}
                    data={dataFrequencyComplaints}
                    keyValue={''}
                    nameTable="Tiempo de respuesta por empresa"
                />
            </div>
        </section>
    );
};

export default ReportGeographic;
