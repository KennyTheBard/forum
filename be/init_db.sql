CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username varchar UNIQUE NOT NULL,
  hashpass varchar NOT NULL
);

CREATE TABLE subs (
  id SERIAL PRIMARY KEY,
  name varchar UNIQUE NOT NULL
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  text varchar NOT NULL,
  sub_id int NOT NULL,
  reply_to_id int,
  author_id int NOT NULL
);

ALTER TABLE posts ADD FOREIGN KEY (sub_id) REFERENCES subs (id);

ALTER TABLE posts ADD FOREIGN KEY (reply_to_id) REFERENCES posts (id);

ALTER TABLE posts ADD FOREIGN KEY (author_id) REFERENCES users (id);
