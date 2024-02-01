import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: [
        'Bank account or service',
        'Mortgage',
        'Credit card',
        'Credit reporting',
        'Debt collection',
        'Consumer Loan',
        'Student loan',
        'Money transfers',
        'Payday loan',
        'Other financial service',
        'Prepaid card',
    ],
    datasets: [
        {
            label: '# of Votes',
            data: [
                6203, 17710, 5951, 11147, 14775, 2130, 1640, 478, 576, 51, 167,
            ],

            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Pie Chart',
        },
    },
    color: 'white',
};

const ReportGeneral = () => {
    return (
        <section className="relative">
            <h2 className="py-6 text-purple-300 text-4xl font-bold text-center mb-[14rem]">
                Graficas de las quejas
            </h2>
            <div className="max-w-md mx-auto w-[1200px] h-[1200px] text-white scale-125">
                <Pie data={data} options={options} />
            </div>
            <Link
                className="absolute top-10 left-10 bg-red-500 font-bold py-2 px-4 rounded-md text-white hover:bg-red-800 transition-all duration-300"
                to="/"
            >
                Volver al inicio
            </Link>
        </section>
    );
};

export default ReportGeneral;
