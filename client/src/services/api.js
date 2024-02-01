const API_URL = 'http://localhost:3000/api';

export const createThing = async (thing) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(thing),
    });
    return response.json();
};

export const getReportIssuesByProduct = async () => {
    const response = await fetch(`${API_URL}/report/`);
    return response.json();
};
export const getReportIssuesAndSubIssues = async () => {
    const response = await fetch(`${API_URL}/report/issues`);
    return response.json();
};
export const getReportCompaniesMoreIssues = async () => {
    const response = await fetch(`${API_URL}/report/companies`);
    return response.json();
};
export const getReportGeographicDistribution = async () => {
    const response = await fetch(`${API_URL}/report/geographic`);
    return response.json();
};

export const getReportResponseTime = async () => {
    const response = await fetch(`${API_URL}/report/response-time`);
    return response.json();
};
export const getReportFrequencyComplaints = async () => {
    const response = await fetch(`${API_URL}/report/frequency`);
    return response.json();
};
