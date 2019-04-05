USE voyager_db;

INSERT INTO Travel (username, password, name, birthday, location, language, travelguide, dates, special_requests, createdAt, updatedAt)

VALUES ("traveler1", "password1", "Jane Doe", 01011980, "italy", "italian", true, 052020, "vegetarian"), 
("traveler2", "password2", "John Doe", 01011970, "france", "french", false, 032020, "none"), 
("traveler3", "password3", "Steve Jobs", 09011980, "japan", "english", true, 052021, "photographer"), 
("traveler4", "password4", "Marge Simpson", 01011980, "italy", "italian", true, 052020, "vegetarian"), 
("traveler5", "password5", "Bart Simpson", 12071986, "australia", "english", false, 022020, "scuba diving"), 
("traveler6", "password6", "Lisa Simpson", 08081985, "italy", "italian", true, 052020, "vegan"), 
("traveler7", "password7", "Homer Simpson", 11201960, "kenya", "english", true, 092020, "safari"), 
("traveler8", "password8", "Maggie Simpson", 05191990, "france", "english", true, 052020, "cooking class"), 
("traveler9", "password9", "Bob Belcher", 12071986, "australia", "french", false, 022020, "koalas"), 
("traveler10", "password10", "Tina Belcher", 11071968, "japan", "english", true, 052021, "scuba diving");

SELECT * FROM Travel;