create database burger_db;

use burger_db;

create table burgers (
id integer(11) auto_increment not null
,burger_name varchar(50) not null
,devoured bool default 0
,date timestamp
,Primary Key (id)
);