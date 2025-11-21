CREATE DATABASE Hotelaria;
USE Hotelaria;

CREATE TABLE Hospedes (
    id_hospede INT NOT NULL AUTO_INCREMENT,
    cpf VARCHAR(12) UNIQUE NOT NULL,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(14),
    PRIMARY KEY (id_hospede)
);

CREATE TABLE Quartos (
    id_quarto INT NOT NULL AUTO_INCREMENT,
    numero INT NOT NULL UNIQUE,
    tipo VARCHAR(20) NOT NULL,
    valor_diaria DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (id_quarto)
);

CREATE TABLE Reservas (
    id_reserva INT NOT NULL AUTO_INCREMENT,
    id_quarto INT NOT NULL,
    id_hospede INT NOT NULL,
    numero_de_hospedes INT NOT NULL,
    valor_total DECIMAL(10,2) NOT NULL,
    data_de_reserva DATE NOT NULL,
    data_checkin DATE NOT NULL,
    data_checkout DATE NOT NULL,
    PRIMARY KEY (id_reserva),
    FOREIGN KEY (id_quarto) REFERENCES Quartos(id_quarto),
    FOREIGN KEY (id_hospede) REFERENCES Hospedes(id_hospede)
);
