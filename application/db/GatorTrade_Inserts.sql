INSERT INTO `GatorTrade`.`Categories` (`title`) VALUES 
("Electronics"),( "Text"), ("Handicraft"), ("Edu_supply"), ("Food");
INSERT INTO `GatorTrade`.`Users` (`password`, `email`) VALUES 
("Password", "student@mail.sfsu.edu"), 
("Password", "student2@mail.sfsu.edu"), 
("Password", "student3@mail.sfsu.edu"), 
("Password", "student4@mail.sfsu.edu"), 
("Password", "student5@mail.sfsu.edu");
INSERT INTO `GatorTrade`.`Items` (`category`, `seller`, `photopath`, `description`, `title`, `price`) VALUES 
(2, 1, NULL, "A fantasy book", "Lord of The Rings", 10),
 (2, 1, NULL, "A magical book", "Harry Potter", 10), 
 (2, 1, NULL, "A mythology book", "Percy Jackson", 10), 
 (2, 1, NULL, "A book with a horrible movie", "Artemis Fowl", 10), 
 (2, 1, NULL, "A dystopian book", "Divergent", 10);
INSERT INTO `GatorTrade`.`Items` (`category`, `seller`, `photopath`, `description`, `title`, `price`) VALUES 
(1, 1, NULL, "Like New", "iPad", 200), 
(1, 1, NULL, "Like New", "iPhone", 400), 
(1, 1, NULL, "Like New", "Samsung S22", 400), 
(1, 1, NULL, "Like New", "Razer Orochi Mouse", 40), 
(1, 1, NULL, "Like New", "Logitech Lightspeed Mouse", 10);
INSERT INTO `GatorTrade`.`Items` (`category`, `seller`, `photopath`, `description`, `title`, `price`) VALUES 
(3, 1, NULL, "Cotton", "Crochet Plush", 10), 
(3, 1, NULL, "Cotton", "Hoodies", 10), 
(3, 1, NULL, "Leather", "Wallet", 10), 
(3, 1, NULL, "Cotton", "Blanket", 10), 
(3, 1, NULL, "Silver", "Earrings", 10);
INSERT INTO `GatorTrade`.`Items` (`category`, `seller`, `photopath`, `description`, `title`, `price`) VALUES 
(4, 1, NULL, "Like New", "CSC648 Textbook", 10), 
(4, 1, NULL, "Like New", "CSC600 Textbook", 10), 
(4, 1, NULL, "Like New", "BIOL101 Textbook", 10), 
(4, 1, NULL, "Like New", "Lab Goggles", 10), 
(4, 1, NULL, "Like New", "Lab Coat", 10);
INSERT INTO `GatorTrade`.`Items` (`category`, `seller`, `photopath`, `description`, `title`, `price`) VALUES 
(5, 1, NULL, "Tastes Good", "Spaghetti", 10), 
(5, 1, NULL, "Tastes Good", "Meatballs", 10), 
(5, 1, NULL, "Tastes Good", "Cupcakes", 10), 
(5, 1, NULL, "Tastes Good", "Italian Coffee", 10), 
(5, 1, NULL, "Tastes Good", "Apple Pie", 10);