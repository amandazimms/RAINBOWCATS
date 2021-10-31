CREATE DATABASE react_gallery;

CREATE TABLE cats (
    id SERIAL PRIMARY KEY,
    path varchar(400) NOT NULL,
    description varchar (500) NOT NULL,
    likes integer DEFAULT 0 NOT NULL 
);

INSERT INTO cats ("path", "description", "likes") 
VALUES('images/catbag.jpeg','Photo of a cat in a bag',0),
('images/catbowl.jpeg','Photo of a cat in a bowl',0),
('images/cathat.jpeg','Photo of a cat wearing a hat',0),
('images/catpetcat.jpeg','Photo of a cat petting another cat',0),
('images/catpounce.jpeg','Photo of a cat pouncing',0),
('images/catsleeve.jpeg','Photo of a cat in a sleeve',0),
('images/catdog.jpeg','Photo of a cat with a dog',0),
('images/catlazy.jpeg','Photo of a lazy cat',0),
('images/catmask.jpeg','Photo of a cat in a mask',0),
('images/catnature.jpeg','Photo of a cat in nature',0),
('images/catnom.jpeg','Photo of a cat nomming',0),
('images/catsmoosh.jpeg','Photo of two cats smooshed up against each other',0),
('images/catwash.jpeg','Photo of a cat washing itself',0),
('images/catwow.jpeg','Photo of a cat with big arms',0),
('images/catyell.jpeg','Photo of a cat yelling',0)


