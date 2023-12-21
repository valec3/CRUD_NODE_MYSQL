export const configDB = {
  host: "localhost",
  user: "root",
  password: "",
  database: "iccpuc_escala",
  port: 3306,
};

// fix possible error: ER_NOT_SUPPORTED_AUTH_MODE

// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'toor';
