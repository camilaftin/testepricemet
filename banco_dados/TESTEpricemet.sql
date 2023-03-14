create database testepricemet;
drop database testepricemet;
use testepricemet;

CREATE TABLE produtos(
ID INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
nome VARCHAR (255) NOT NULL,
descricao VARCHAR(255) NOT NULL,
preco DECIMAL (10,2) NOT NULL
);

show grants;
select * from produtos;
delete from produtos where id=1;

insert into produtos (nome, descricao, preco) values ('A Colina', 'Volume I', 33.90);
insert into produtos (nome, descricao, preco) values ('A Colina: Redenção', 'Volume II', 55.00);
insert into produtos (nome, descricao, preco) values ('Colinas', 'Volume III', 24);
drop table produtos;

