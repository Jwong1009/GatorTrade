-- FILE: db/GatorTrade_Inserts.sql
-- DESCRIPTION: Insert statements to demonstrate database
-- CREATED BY: Ze
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
(2, 1, "A fantasy book nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis", "Lord of The Rings", 11, "images/lotr.jpg"),
 (2, 2, "A magical book nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis", "Harry Potter", 12, "images/harry-potter.jpg"), 
 (2, 3, "A mythology book nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis", "Percy Jackson", 13, "images/percy-jackson.jpg"), 
 (2, 4, "A book with a horrible movie nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis", "Artemis Fowl", 14, "images/artemis-fowl.jpg"), 
 (2, 5, "A dystopian book nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis", "Divergent", 15, "images/divergent.jpg");
INSERT INTO `GatorTrade`.`Items` (`category`, `seller`, `description`, `title`, `price`, `photopath`) VALUES 
(1, 1, "Like New nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "iPad", 200, "images/ipad.jpg"), 
(1, 2, "Like New nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "iPhone", 400, "images/iphone.jpg"), 
(1, 3, "Like New nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "Samsung S22", 400, "images/s22.jpg"), 
(1, 4, "Like New nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "Razer Orochi Mouse", 40, "images/orochi.jpg"), 
(1, 5, "Like New nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "Logitech Lightspeed Mouse", 15, "images/lightspeed.jpg");
INSERT INTO `GatorTrade`.`Items` (`category`, `seller`, `description`, `title`, `price`, `photopath`) VALUES 
(3, 1, "Cotton nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "Crochet Plush", 11, "images/plush.jpg"), 
(3, 2, "Cotton nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "Hoodies", 12, "images/hoodie.jpg"), 
(3, 3, "Leather nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "Wallet", 13, "images/wallet.jpg"), 
(3, 4, "Cotton nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "Blanket", 14, "images/blanket.jpeg"), 
(3, 5, "Silver nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "Earrings", 15, "images/earrings.jpg");
INSERT INTO `GatorTrade`.`Items` (`category`, `seller`, `description`, `title`, `price`, `photopath`) VALUES 
(4, 1, "Like New nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "CSC648 Textbook", 11, "images/csc-textbook.jpg"), 
(4, 2, "Like New nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "CSC600 Textbook", 12, "images/csc-textbook.jpg"), 
(4, 3, "Like New nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "BIOL101 Textbook", 13, "images/biol-textbook.jpg"), 
(4, 4, "Like New nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "Lab Goggles", 14, "images/lab-goggles.jpg"), 
(4, 5, "Like New nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "Lab Coat", 15, "images/lab-coat.jpg");
INSERT INTO `GatorTrade`.`Items` (`category`, `seller`, `description`, `title`, `price`, `photopath`) VALUES 
(5, 1, "Tastes Good nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "Spaghetti", 11, "images/spaghetti.jpg"), 
(5, 2, "Tastes Good nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "Meatballs", 12, "images/meatballs.jpg"), 
(5, 3, "Tastes Good nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "Cupcakes", 13, "images/cupcake.jpg"), 
(5, 4, "Tastes Good nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "Italian Coffee", 14, "images/coffee.jpg"), 
(5, 5, "Tastes Good nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "Apple Pie", 15, "images/apple-pie.jpg");
