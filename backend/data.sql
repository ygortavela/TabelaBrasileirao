create table jogo (
	id_jogo serial not null primary key,
	rodada int not null,
	data_horario timestamp not null,
	local_jogo varchar(256) not null
);

create table time (
	id_time serial not null primary key,
	nome varchar(256) not null,
	sigla varchar(3) not null
);

create table joga_jogo (
	id_joga_jogo serial not null primary key,
	id_time int not null references time on delete cascade,
	id_jogo int not null references jogo on delete cascade,
	qtd_gols int not null,
	qtd_cartao_amarelo int not null,
	qtd_cartao_vermelho int not null
)

INSERT INTO time(id_time, nome, sigla) VALUES (1, 'Flamengo', 'FLA');
INSERT INTO time(id_time, nome, sigla) VALUES (2, 'Corinthians', 'COR');
INSERT INTO time(id_time, nome, sigla) VALUES (3, 'Internacional', 'INT');
INSERT INTO time(id_time, nome, sigla) VALUES (4, 'Atlético-MG', 'CAM');
INSERT INTO time(id_time, nome, sigla) VALUES (5, 'São Paulo', 'SAO');
INSERT INTO time(id_time, nome, sigla) VALUES (6, 'Santos', 'SAN');
INSERT INTO time(id_time, nome, sigla) VALUES (7, 'Fluminense', 'FLU');
INSERT INTO time(id_time, nome, sigla) VALUES (8, 'Fortaleza', 'FOR');
INSERT INTO time(id_time, nome, sigla) VALUES (9, 'Palmeiras', 'PAL');
INSERT INTO time(id_time, nome, sigla) VALUES (10, 'Atlético-GO', 'ACG');
INSERT INTO time(id_time, nome, sigla) VALUES (11, 'Grêmio', 'GRE');
INSERT INTO time(id_time, nome, sigla) VALUES (12, 'Sport', 'SPT');
INSERT INTO time(id_time, nome, sigla) VALUES (13, 'Bahia', 'BAH');
INSERT INTO time(id_time, nome, sigla) VALUES (14, 'Ceará', 'CEA');
INSERT INTO time(id_time, nome, sigla) VALUES (15, 'Botafogo', 'BOT');
INSERT INTO time(id_time, nome, sigla) VALUES (16, 'Vasco', 'VAS');
INSERT INTO time(id_time, nome, sigla) VALUES (17, 'Athletico-PR', 'CAP');
INSERT INTO time(id_time, nome, sigla) VALUES (18, 'Coritiba', 'CFC');
INSERT INTO time(id_time, nome, sigla) VALUES (19, 'Bragantino', 'BGT');
INSERT INTO time(id_time, nome, sigla) VALUES (20, 'Goiás', 'GOI');

INSERT INTO jogo(id_jogo, rodada, data_horario, local_jogo) VALUES (1, 1, '2020-08-08T19:00:00', 'CASTELÃO (CE)');
INSERT INTO jogo(id_jogo, rodada, data_horario, local_jogo) VALUES (2, 1, '2020-08-08T19:30:00', 'COUTO PEREIRA');
INSERT INTO jogo(id_jogo, rodada, data_horario, local_jogo) VALUES (3, 1, '2020-08-08T21:00:00', 'ILHA DO RETIRO');
INSERT INTO jogo(id_jogo, rodada, data_horario, local_jogo) VALUES (4, 1, '2020-08-09T16:00:00', 'MARACANÂ');
INSERT INTO jogo(id_jogo, rodada, data_horario, local_jogo) VALUES (5, 1, '2020-08-09T16:00:00', 'VILA BELMIRO');
INSERT INTO jogo(id_jogo, rodada, data_horario, local_jogo) VALUES (6, 1, '2020-08-09T19:00:00', 'ARENA DO GRÊMIO');
INSERT INTO jogo(id_jogo, rodada, data_horario, local_jogo) VALUES (7, 1, '2020-09-30T21:30:00', 'NILTON SANTOS (ENGENHÃO)');
INSERT INTO jogo(id_jogo, rodada, data_horario, local_jogo) VALUES (8, 1, '2020-09-30T21:30:00', 'NEO QUÌMICA ARENA');
INSERT INTO jogo(id_jogo, rodada, data_horario, local_jogo) VALUES (9, 2, '2020-08-12T19:15:00', 'NABI ABI CHEDID');
INSERT INTO jogo(id_jogo, rodada, data_horario, local_jogo) VALUES (10, 2, '2020-08-12T19:15:00', 'MINEIRÂO');
INSERT INTO jogo(id_jogo, rodada, data_horario, local_jogo) VALUES (11, 2, '2020-08-12T19:15:00', 'ARENA DA BAIXADA');
INSERT INTO jogo(id_jogo, rodada, data_horario, local_jogo) VALUES (12, 2, '2020-08-12T20:30:00', 'PITUAÇU');
INSERT INTO jogo(id_jogo, rodada, data_horario, local_jogo) VALUES (13, 2, '2020-08-12T20:30:00', 'OLÌMPICO (GO)');
INSERT INTO jogo(id_jogo, rodada, data_horario, local_jogo) VALUES (14, 2, '2020-08-12T20:30:00', 'MARACANÂ');
INSERT INTO jogo(id_jogo, rodada, data_horario, local_jogo) VALUES (15, 2, '2020-08-12T20:30:00', 'CASTELÂO (CE)');
INSERT INTO jogo(id_jogo, rodada, data_horario, local_jogo) VALUES (16, 2, '2020-08-13T19:15:00', 'MORUMBI');
INSERT INTO jogo(id_jogo, rodada, data_horario, local_jogo) VALUES (17, 2, '2020-08-13T19:30:00', 'BEIRA-RIO');
INSERT INTO jogo(id_jogo, rodada, data_horario, local_jogo) VALUES (18, 2, '2020-08-13T20:00:00', 'SÂO JANUÀRIO');

INSERT INTO joga_jogo(id_joga_jogo, id_time, id_jogo, qtd_gols, qtd_cartao_amarelo, qtd_cartao_vermelho)
  VALUES (1, 8, 1, 0, 3, 1);
INSERT INTO joga_jogo(id_joga_jogo, id_time, id_jogo, qtd_gols, qtd_cartao_amarelo, qtd_cartao_vermelho)
  VALUES (2, 17, 1, 2, 2, 0);

INSERT INTO joga_jogo(id_joga_jogo, id_time, id_jogo, qtd_gols, qtd_cartao_amarelo, qtd_cartao_vermelho)
  VALUES (3, 18, 2, 0, 3, 0);
INSERT INTO joga_jogo(id_joga_jogo, id_time, id_jogo, qtd_gols, qtd_cartao_amarelo, qtd_cartao_vermelho)
  VALUES (4, 3, 2, 0, 4, 0);

INSERT INTO joga_jogo(id_joga_jogo, id_time, id_jogo, qtd_gols, qtd_cartao_amarelo, qtd_cartao_vermelho)
  VALUES (5, 12, 3, 3, 3, 0);
INSERT INTO joga_jogo(id_joga_jogo, id_time, id_jogo, qtd_gols, qtd_cartao_amarelo, qtd_cartao_vermelho)
  VALUES (6, 14, 3, 3, 3, 0);

INSERT INTO joga_jogo(id_joga_jogo, id_time, id_jogo, qtd_gols, qtd_cartao_amarelo, qtd_cartao_vermelho)
  VALUES (7, 1, 4, 0, 3, 0);
INSERT INTO joga_jogo(id_joga_jogo, id_time, id_jogo, qtd_gols, qtd_cartao_amarelo, qtd_cartao_vermelho)
  VALUES (8, 4, 4, 1, 2, 0);

INSERT INTO joga_jogo(id_joga_jogo, id_time, id_jogo, qtd_gols, qtd_cartao_amarelo, qtd_cartao_vermelho)
  VALUES (9, 6, 5, 1, 0, 0);
INSERT INTO joga_jogo(id_joga_jogo, id_time, id_jogo, qtd_gols, qtd_cartao_amarelo, qtd_cartao_vermelho)
  VALUES (10, 19, 5, 1, 1, 0);

INSERT INTO joga_jogo(id_joga_jogo, id_time, id_jogo, qtd_gols, qtd_cartao_amarelo, qtd_cartao_vermelho)
  VALUES (11, 11, 6, 1, 2, 0);
INSERT INTO joga_jogo(id_joga_jogo, id_time, id_jogo, qtd_gols, qtd_cartao_amarelo, qtd_cartao_vermelho)
  VALUES (12, 7, 6, 0, 3, 0);

INSERT INTO joga_jogo(id_joga_jogo, id_time, id_jogo, qtd_gols, qtd_cartao_amarelo, qtd_cartao_vermelho)
  VALUES (13, 15, 7, 1, 2, 1);
INSERT INTO joga_jogo(id_joga_jogo, id_time, id_jogo, qtd_gols, qtd_cartao_amarelo, qtd_cartao_vermelho)
  VALUES (14, 13, 7, 2, 3, 0);

INSERT INTO joga_jogo(id_joga_jogo, id_time, id_jogo, qtd_gols, qtd_cartao_amarelo, qtd_cartao_vermelho)
  VALUES (15, 2, 8, 0, 2, 0);
INSERT INTO joga_jogo(id_joga_jogo, id_time, id_jogo, qtd_gols, qtd_cartao_amarelo, qtd_cartao_vermelho)
  VALUES (16, 10, 8, 0, 0, 0);

INSERT INTO joga_jogo(id_joga_jogo, id_time, id_jogo, qtd_gols, qtd_cartao_amarelo, qtd_cartao_vermelho)
  VALUES (17, 19, 9, 1, 3, 0);
INSERT INTO joga_jogo(id_joga_jogo, id_time, id_jogo, qtd_gols, qtd_cartao_amarelo, qtd_cartao_vermelho)
  VALUES (18, 15, 9, 1, 1, 0);

INSERT INTO joga_jogo(id_joga_jogo, id_time, id_jogo, qtd_gols, qtd_cartao_amarelo, qtd_cartao_vermelho)
  VALUES (19, 4, 10, 3, 0, 0);
INSERT INTO joga_jogo(id_joga_jogo, id_time, id_jogo, qtd_gols, qtd_cartao_amarelo, qtd_cartao_vermelho)
  VALUES (20, 2, 10, 2, 1, 0);

INSERT INTO joga_jogo(id_joga_jogo, id_time, id_jogo, qtd_gols, qtd_cartao_amarelo, qtd_cartao_vermelho)
  VALUES (21, 17, 11, 2, 3, 0);
INSERT INTO joga_jogo(id_joga_jogo, id_time, id_jogo, qtd_gols, qtd_cartao_amarelo, qtd_cartao_vermelho)
  VALUES (22, 20, 11, 1, 3, 0);

INSERT INTO joga_jogo(id_joga_jogo, id_time, id_jogo, qtd_gols, qtd_cartao_amarelo, qtd_cartao_vermelho)
  VALUES (23, 13, 12, 1, 0, 0);
INSERT INTO joga_jogo(id_joga_jogo, id_time, id_jogo, qtd_gols, qtd_cartao_amarelo, qtd_cartao_vermelho)
  VALUES (24, 18, 12, 0, 4, 0);

INSERT INTO joga_jogo(id_joga_jogo, id_time, id_jogo, qtd_gols, qtd_cartao_amarelo, qtd_cartao_vermelho)
  VALUES (25, 10, 13, 3, 1, 0);
INSERT INTO joga_jogo(id_joga_jogo, id_time, id_jogo, qtd_gols, qtd_cartao_amarelo, qtd_cartao_vermelho)
  VALUES (26, 1, 13, 0, 1, 0);

INSERT INTO joga_jogo(id_joga_jogo, id_time, id_jogo, qtd_gols, qtd_cartao_amarelo, qtd_cartao_vermelho)
  VALUES (27, 7, 14, 1, 3, 0);
INSERT INTO joga_jogo(id_joga_jogo, id_time, id_jogo, qtd_gols, qtd_cartao_amarelo, qtd_cartao_vermelho)
  VALUES (28, 9, 14, 1, 3, 0);

INSERT INTO joga_jogo(id_joga_jogo, id_time, id_jogo, qtd_gols, qtd_cartao_amarelo, qtd_cartao_vermelho)
  VALUES (29, 14, 15, 1, 3, 0);
INSERT INTO joga_jogo(id_joga_jogo, id_time, id_jogo, qtd_gols, qtd_cartao_amarelo, qtd_cartao_vermelho)
  VALUES (30, 11, 15, 1, 1, 0);

INSERT INTO joga_jogo(id_joga_jogo, id_time, id_jogo, qtd_gols, qtd_cartao_amarelo, qtd_cartao_vermelho)
  VALUES (31, 5, 16, 1, 1, 0);
INSERT INTO joga_jogo(id_joga_jogo, id_time, id_jogo, qtd_gols, qtd_cartao_amarelo, qtd_cartao_vermelho)
  VALUES (32, 8, 16, 0, 2, 0);

INSERT INTO joga_jogo(id_joga_jogo, id_time, id_jogo, qtd_gols, qtd_cartao_amarelo, qtd_cartao_vermelho)
  VALUES (33, 3, 17, 2, 2, 0);
INSERT INTO joga_jogo(id_joga_jogo, id_time, id_jogo, qtd_gols, qtd_cartao_amarelo, qtd_cartao_vermelho)
  VALUES (34, 6, 17, 0, 3, 0);

INSERT INTO joga_jogo(id_joga_jogo, id_time, id_jogo, qtd_gols, qtd_cartao_amarelo, qtd_cartao_vermelho)
  VALUES (35, 16, 18, 2, 2, 0);
INSERT INTO joga_jogo(id_joga_jogo, id_time, id_jogo, qtd_gols, qtd_cartao_amarelo, qtd_cartao_vermelho)
  VALUES (36, 12, 18, 0, 3, 1);

begin;
select setval(pg_get_serial_sequence('time', 'id_time'), coalesce(max("id_time"), 1), max("id_time") is not null) from time;
select setval(pg_get_serial_sequence('jogo', 'id_jogo'), coalesce(max("id_jogo"), 1), max("id_jogo") is not null) from jogo;
select setval(pg_get_serial_sequence('joga_jogo', 'id_joga_jogo'), coalesce(max("id_joga_jogo"), 1), max("id_joga_jogo") is not null) from joga_jogo;
commit;
