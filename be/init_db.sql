CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username varchar UNIQUE NOT NULL,
  hashpass varchar NOT NULL
);

CREATE TABLE subs (
  id SERIAL PRIMARY KEY,
  name varchar UNIQUE NOT NULL,
  author_id int NOT NULL
);

ALTER TABLE subs ADD FOREIGN KEY (author_id) REFERENCES users (id);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title varchar NOT NULL,
  content varchar NOT NULL,
  sub_id int NOT NULL,
  author_id int NOT NULL,
  posted_at date NOT NULL
);

ALTER TABLE posts ADD FOREIGN KEY (sub_id) REFERENCES subs (id);

ALTER TABLE posts ADD FOREIGN KEY (author_id) REFERENCES users (id);

CREATE TABLE replies (
  id SERIAL PRIMARY KEY,
  content varchar NOT NULL,
  post_id int NOT NULL,
  reply_to_id int,
  author_id int NOT NULL,
  posted_at date NOT NULL
);

ALTER TABLE replies ADD FOREIGN KEY (post_id) REFERENCES posts (id);

ALTER TABLE replies ADD FOREIGN KEY (reply_to_id) REFERENCES replies (id);

ALTER TABLE replies ADD FOREIGN KEY (author_id) REFERENCES users (id);
