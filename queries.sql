CREATE TABLE ConsumerComplaints (
    DateReceived DATE,
    ProductName VARCHAR(255),
    SubProduct VARCHAR(255),
    Issue VARCHAR(255),
    SubIssue VARCHAR(255),
    ConsumerComplaintNarrative TEXT,
    CompanyPublicResponse TEXT,
    Company VARCHAR(255),
    StateName VARCHAR(255),
    ZipCode VARCHAR(10),
    Tags VARCHAR(255),
    ConsumerConsentProvided VARCHAR(5),
    SubmittedVia VARCHAR(50),
    DateSentToCompany DATE,
    CompanyResponseToConsumer VARCHAR(255),
    TimelyResponse VARCHAR(5),
    ConsumerDisputed VARCHAR(5),
    ComplaintID INT PRIMARY KEY
);



SELECT * FROM consumercomplaints LIMIT 10;



-- Número total de quejas por producto:   1
SELECT ProductName, COUNT(*) AS TotalQuejas
FROM ConsumerComplaints
GROUP BY ProductName;

CREATE VIEW TotalQuejasPorProducto AS 
    SELECT ProductName, COUNT(*) AS TotalQuejas
    FROM ConsumerComplaints
    GROUP BY ProductName;

SELECT * FROM TotalQuejasPorProducto;

-- Principales problemas e inquietudes:  2
SELECT Issue, SubIssue, COUNT(*) AS TotalQuejas
FROM ConsumerComplaints
GROUP BY Issue, SubIssue
ORDER BY TotalQuejas DESC;

CREATE VIEW ProblemasEInquietudes AS
    SELECT Issue, SubIssue, COUNT(*) AS TotalQuejas
    FROM ConsumerComplaints
    GROUP BY Issue, SubIssue
    ORDER BY TotalQuejas DESC;

SELECT * FROM ProblemasEInquietudes;

-- Empresas con más quejas:  3 
SELECT Company, COUNT(*) AS TotalQuejas
FROM ConsumerComplaints
GROUP BY Company
ORDER BY TotalQuejas DESC;

CREATE VIEW EmpresasConMasQuejas AS
    SELECT Company, COUNT(*) AS TotalQuejas
    FROM ConsumerComplaints
    GROUP BY Company
    ORDER BY TotalQuejas DESC;

SELECT * FROM EmpresasConMasQuejas;

-- Distribución geográfica de quejas:  4
SELECT StateName, COUNT(*) AS TotalQuejas
FROM ConsumerComplaints
GROUP BY StateName
ORDER BY TotalQuejas DESC;

CREATE VIEW DistribucionGeograficaQuejas AS
    SELECT StateName, COUNT(*) AS TotalQuejas
    FROM ConsumerComplaints
    GROUP BY StateName
    ORDER BY TotalQuejas DESC;

SELECT * FROM DistribucionGeograficaQuejas;


-- Respuestas a tiempo de las empresas   5

SELECT Company, TimelyResponse, COUNT(*) AS TotalQuejas
FROM ConsumerComplaints
GROUP BY Company, TimelyResponse
ORDER BY Company, TotalQuejas DESC;

CREATE VIEW RespuestasATiempo AS
    SELECT Company, TimelyResponse, COUNT(*) AS TotalQuejas
    FROM ConsumerComplaints
    GROUP BY Company, TimelyResponse
    ORDER BY Company, TotalQuejas DESC;

SELECT * FROM RespuestasATiempo;


-- Frecuencia de quejas a lo largo del tiempo:  6

SELECT YEAR(DateReceived) AS Year, MONTH(DateReceived) AS Month, COUNT(*) AS TotalQuejas
FROM ConsumerComplaints
GROUP BY YEAR(DateReceived), MONTH(DateReceived)
ORDER BY Year, Month;

CREATE VIEW FrecuenciaQuejas AS
    SELECT YEAR(DateReceived) AS Year, MONTH(DateReceived) AS Month, COUNT(*) AS TotalQuejas
    FROM ConsumerComplaints
    GROUP BY YEAR(DateReceived), MONTH(DateReceived)
    ORDER BY Year, Month;

SELECT * FROM FrecuenciaQuejas;
