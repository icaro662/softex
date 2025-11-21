create database teste;

use teste;

CREATE TABLE Departamento ( 
id_departamento INT NOT NULL AUTO_INCREMENT,
nome_departamento VARCHAR(50) NOT NULL,
PRIMARY KEY (id_departamento) 
);


insert into Departamento(nome_departamento)
values
    ("Softch"),
    ("Evolutech"),
    ("Inovatech");


CREATE TABLE Funcionario (
id_funcionario INT NOT NULL AUTO_INCREMENT,
nome_funcionario VARCHAR(100) NOT NULL, 
cargo VARCHAR(50), 
id_departamento INT, 
PRIMARY KEY (id_funcionario), // chave primaria
FOREIGN KEY (id_departamento) REFERENCES Departamento(id_departamento) // chave estrangeira
);

insert into Funcionario(nome_funcionario, cargo, id_departamento)
values ("João Silva", "Desenvolvedor", 1);

select * from Departamento;
select * from Funcionario;