create database RedeSocial;
USE RedeSocial;

create table Usuario (
    id_usuario INT AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    data_cadastro DATE NOT NULL,
    PRIMARY KEY (id_usuario)
);

create table Postagem (
    id_postagem INT AUTO_INCREMENT,
    id_usuario INT NOT NULL,
    data_criacao DATE NOT NULL,
    quantidade_curtidas INT DEFAULT 0,
    conteudo_texto TEXT NOT NULL,
    PRIMARY KEY (id_postagem),
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario)
);

create table Curte (
    id_usuario INT NOT NULL,
    id_postagem INT NOT NULL,
    data_curtida DATE NOT NULL,
    PRIMARY KEY (id_usuario, id_postagem),
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario),
    FOREIGN KEY (id_postagem) REFERENCES Postagem(id_postagem)
);

create table Segue (
    id_seguidor INT NOT NULL,
    id_seguido INT NOT NULL,
    data_seguido DATE NOT NULL,
    PRIMARY KEY (id_seguidor, id_seguido),
    FOREIGN KEY (id_seguidor) REFERENCES Usuario(id_usuario),
    FOREIGN KEY (id_seguido) REFERENCES Usuario(id_usuario)
);

insert into Usuario (nome, email, data_cadastro)
values
    ("Alice", "alice@example.com", "2023-01-01"),   
    ("Bob", "bob@example.com", "2023-01-02"),
    ("Charlie", "charlie@example.com", "2023-01-03");

insert into Postagem (id_usuario, data_criacao, conteudo_texto)
values
    (1, "2023-01-01", "Meu primeiro post!"),
    (2, "2023-01-02", "Olá, mundo!"),
    (3, "2023-01-03", "Aproveitando o dia!");

insert into Curte (id_usuario, id_postagem, data_curtida)
values
    (2, 1, "2023-01-02"),  
    (3, 1, "2023-01-03"),
    (1, 2, "2023-01-03");

insert into Segue (id_seguidor, id_seguido, data_seguido)
values
    (1, 2, "2023-01-02"),  
    (1, 3, "2023-01-03"),
    (2, 3, "2023-01-03");