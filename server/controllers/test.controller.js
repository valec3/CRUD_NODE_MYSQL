import db from '../db.js';
export const testController = async (req, res) => {
    try {
        db.query(`SELECT * FROM ProblemasEInquietudes`, (err, results) => {
            if (err) {
                throw err;
            }
            res.send(results);
        });
    } catch {
        res.status(500).send('Error');
    }
};

export const getNameTablesOfDB = async () => {
    return new Promise((resolve, reject) => {
        const nameTables = [];
        db.query(
            `SELECT table_name
			FROM information_schema.tables
			WHERE table_schema = 'sakila'`,
            (err, results) => {
                if (err) {
                    reject(err);
                    return;
                }
                results.forEach((element) => {
                    nameTables.push(element.TABLE_NAME);
                });
                resolve(nameTables);
            },
        );
    });
};

export const countRecordsOfAllTables = async (req, res) => {
    const countRecordsForTable = [];
    try {
        const nameTables = await getNameTablesOfDB();
        for (const table of nameTables) {
            const count = await new Promise((resolve, reject) => {
                db.query(
                    `SELECT COUNT(*) as records FROM ${table}`,
                    (err, results) => {
                        if (err) {
                            reject(err);
                            return;
                        }
                        resolve(results[0].records);
                    },
                );
            });

            countRecordsForTable.push({
                table,
                count,
            });
        }
        console.log(countRecordsForTable);
        res.send(countRecordsForTable);
    } catch (error) {
        console.error('Error fetching table names:', error);
        res.status(500).send('Error');
    }
};
