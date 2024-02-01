import db from '../db.js';

export const getReportGeneral = async (req, res) => {
    db.query(`SELECT * FROM TotalQuejasPorProducto;`, (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    });
};
export const getMoreComplaintsCompany = async (req, res) => {
    db.query(`SELECT * FROM EmpresasConMasQuejas;`, (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    });
};

export const getIssuesAndSubIssues = async (req, res) => {
    db.query(`SELECT * FROM ProblemasEInquietudes;`, (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    });
};

export const getDistributionGeographic = async (req, res) => {
    db.query(`SELECT * FROM DistribucionGeograficaQuejas;`, (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    });
};

export const getResponseTime = async (req, res) => {
    db.query(`SELECT * FROM RespuestasATiempo;`, (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    });
};

export const getFrequencyComplaints = async (req, res) => {
    db.query(`SELECT * FROM FrecuenciaQuejas;`, (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    });
};
