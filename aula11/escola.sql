create database escola;

use escola;

create table alunos (
id int primary key auto_increment,
nome varchar(50),
idade int,
turma varchar(10)
);

insert into alunos(nome, idade, turma)
values
("Ana", 16, "C");

insert into alunos(nome, idade, turma)
values
("Bia", 22, "A"),
("Maria", 45, "B"),
("Eduarda", 16, "A");

select * from alunos;

update alunos set idade = 16 where nome = 'Eduarda';

select * from alunos where idade = 16;

update alunos set turma = "A" where nome = "Ana";

