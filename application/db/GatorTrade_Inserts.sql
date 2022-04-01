INSERT INTO `GatorTrade`.`Categories` (`title`) VALUES 
("Electronics"),( "Text"), ("Handicraft"), ("Edu_supply"), ("Food");
INSERT INTO `GatorTrade`.`Users` (`password`, `email`, `firstname`, `lastname`) VALUES 
("Password", "student2@mail.sfsu.edu", "Kim", "Possible"), 
("Password", "student3@mail.sfsu.edu", "Jake", "Long"), 
("Password", "student4@mail.sfsu.edu", "Raven", "Baxter"), 
("Password", "student5@mail.sfsu.edu", "Ferb", "Fletcher");
INSERT INTO `GatorTrade`.`Users` (`password`, `email`, `firstname`, `lastname`, `admin`) VALUES 
("Password", "student@mail.sfsu.edu", "Joe", "Schmuck", 1);
INSERT INTO `GatorTrade`.`Items` (`category`, `seller`, `description`, `title`, `price`, `photopath`) VALUES 
(2, 1, "A fantasy book", "Lord of The Rings", 10, "public/images/lotr.jpg"),
 (2, 1, "A magical book", "Harry Potter", 10, "public/images/harry-potter.jpg"), 
 (2, 1, "A mythology book", "Percy Jackson", 10, "public/images/percy-jackson.jpg"), 
 (2, 1, "A book with a horrible movie", "Artemis Fowl", 10, "public/images/artemis-fowl.jpg"), 
 (2, 1, "A dystopian book", "Divergent", 10, "public/images/divergent.jpg");
INSERT INTO `GatorTrade`.`Items` (`category`, `seller`, `description`, `title`, `price`, `photopath`) VALUES 
(1, 1, "Like New", "iPad", 200, "public/images/ipad.jpg"), 
(1, 1, "Like New", "iPhone", 400, "public/images/iphone.jpg"), 
(1, 1, "Like New", "Samsung S22", 400, "public/images/s22.jpg"), 
(1, 1, "Like New", "Razer Orochi Mouse", 40, "public/images/orochi.jpg"), 
(1, 1, "Like New", "Logitech Lightspeed Mouse", 10, "public/images/lightspeed.jpg");
INSERT INTO `GatorTrade`.`Items` (`category`, `seller`, `description`, `title`, `price`, `photopath`) VALUES 
(3, 1, "Cotton", "Crochet Plush", 10, "public/images/plush.jpg"), 
(3, 1, "Cotton", "Hoodies", 10, "public/images/hoodie.jpg"), 
(3, 1, "Leather", "Wallet", 10, "public/images/wallet.jpg"), 
(3, 1, "Cotton", "Blanket", 10, "public/images/blanket.jpeg"), 
(3, 1, "Silver", "Earrings", 10, "public/images/earrings.jpg");
INSERT INTO `GatorTrade`.`Items` (`category`, `seller`, `description`, `title`, `price`, `photopath`) VALUES 
(4, 1, "Like New", "CSC648 Textbook", 10, "public/images/csc-textbook.jpg"), 
(4, 1, "Like New", "CSC600 Textbook", 10, "public/images/csc-textbook.jpg"), 
(4, 1, "Like New", "BIOL101 Textbook", 10, "public/images/biol-textbook.jpg"), 
(4, 1, "Like New", "Lab Goggles", 10, "public/images/lab-goggles.jpg"), 
(4, 1, "Like New", "Lab Coat", 10, "public/images/lab-coat.jpg");
INSERT INTO `GatorTrade`.`Items` (`category`, `seller`, `description`, `title`, `price`, `photopath`) VALUES 
(5, 1, "Tastes Good", "Spaghetti", 10, "public/images/spaghetti.jpg"), 
(5, 1, "Tastes Good", "Meatballs", 10, "public/images/meatballs.jpg"), 
(5, 1, "Tastes Good", "Cupcakes", 10, "public/images/cupcakes.jpg"), 
(5, 1, "Tastes Good", "Italian Coffee", 10, "public/images/coffee.jpg"), 
(5, 1, "Tastes Good", "Apple Pie", 10, "public/images/apple-pie.jpg");