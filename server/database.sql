CREATE DATABASE tpl_Registrations;

CREATE TABLE registrations(
    reg_id SERIAL PRIMARY KEY,
    name VARCHAR(30),
    age VARCHAR(20),
    email VARCHAR(50),
    refferal VARCHAR(100) DEFAULT 0
);