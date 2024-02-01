import { useEffect, useState } from 'react';
import MyCustomTable from '../../components/MyCustomTable';
import {
    getReportIssuesByProduct,
    getReportCompaniesMoreIssues,
    getReportIssuesAndSubIssues,
} from '../../services/api';
import { Link } from 'react-router-dom';
const ReportIssues = () => {
    const [dataIssuesByProduct, setDataIssuesByProduct] = useState([]);
    const [dataIssuesandSubIssue, setDataIssuesandSubIssue] = useState([]);
    const [dataCompaniesMoreIssues, setDataCompaniesMoreIssues] = useState([]);

    useEffect(() => {
        const getDataIssuesByProduct = async () => {
            const data = await getReportIssuesByProduct();
            // console.log('data:', data);
            setDataIssuesByProduct(data);
        };
        getDataIssuesByProduct();
    }, []);

    useEffect(() => {
        const getDataIssuesAndSubIssues = async () => {
            const data = await getReportIssuesAndSubIssues();
            // console.log('data:', data);
            setDataIssuesandSubIssue(data);
        };
        getDataIssuesAndSubIssues();
    }, []);

    useEffect(() => {
        const getDataCompaniesMoreIssues = async () => {
            const data = await getReportCompaniesMoreIssues();
            setDataCompaniesMoreIssues(data);
        };
        getDataCompaniesMoreIssues();
    }, []);

    console.log(dataIssuesandSubIssue);
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
                        { field: 'ProductName', headerName: 'Producto' },
                        { field: 'TotalQuejas', headerName: 'Quejas' },
                    ]}
                    data={dataIssuesByProduct}
                    keyValue={'ProductName'}
                    nameTable="Numero de quejas por producto"
                />
            </div>
            <div>
                <MyCustomTable
                    columns={[
                        { field: 'Issue', headerName: 'Queja' },
                        { field: 'SubIssue', headerName: 'Inquietud' },
                        { field: 'TotalQuejas', headerName: 'Total' },
                    ]}
                    data={dataIssuesandSubIssue}
                    keyValue={'Issue'}
                    nameTable="Numero de quejas y inquietudes por producto"
                />
            </div>
            <div>
                <MyCustomTable
                    columns={[
                        { field: 'Company', headerName: 'Empresa' },
                        { field: 'TotalQuejas', headerName: 'Total de quejas' },
                    ]}
                    data={dataCompaniesMoreIssues}
                    keyValue={'Company'}
                    nameTable="Empresas con mas quejas"
                />
            </div>
        </section>
    );
};

export default ReportIssues;
