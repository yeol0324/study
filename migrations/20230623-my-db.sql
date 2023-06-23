-- Up
CREATE TABLE Pokemon (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
);

INSERT INTO Pokemon (name) values('Pikachu');
INSERT INTO Pokemon (name) values('Eevee');
INSERT INTO Pokemon (name) values('Snorlax');
INSERT INTO Pokemon (name) values('Ditto');

-- Down
DROP TABLE Pokemon;

