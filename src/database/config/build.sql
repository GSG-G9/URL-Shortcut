BEGIN;
DROP TABLE IF EXISTS users, urls CASCADE;
CREATE TABLE users(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(33) NOT NULL UNIQUE
);

CREATE TABLE urls (
    id SERIAL PRIMARY KEY,
    urlFull TEXT NOT NULL,
    urlShort TEXT NOT NULL UNIQUE,
    visitors INTEGER,
    userId INTEGER REFERENCES users(id) ON UPDATE CASCADE
);

INSERT INTO users(name) VALUES ('OSAMA');
INSERT INTO urls(urlFull,urlShort,visitors,userId)  VALUES ('for url', 'short url', 3, 1);

COMMIT;