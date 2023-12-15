const API_URL = 'http://localhost:3000/api/test';

export const getRecordsForAllTable = async () => {
    const response = await fetch(`${API_URL}/countRecordsOfAllTables`);
    const data = await response.json();
    return data;
};