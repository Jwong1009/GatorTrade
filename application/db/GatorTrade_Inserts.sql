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
(2, 1, "A fantasy book nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "Lord of The Rings", 10, "public/images/lotr.jpg"),
 (2, 1, "A magical book nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "Harry Potter", 10, "public/images/harry-potter.jpg"), 
 (2, 1, "A mythology book nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "Percy Jackson", 10, "public/images/percy-jackson.jpg"), 
 (2, 1, "A book with a horrible movie nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "Artemis Fowl", 10, "public/images/artemis-fowl.jpg"), 
 (2, 1, "A dystopian book nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "Divergent", 10, "public/images/divergent.jpg");
INSERT INTO `GatorTrade`.`Items` (`category`, `seller`, `description`, `title`, `price`, `photopath`) VALUES 
(1, 1, "Like New nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "iPad", 200, "public/images/ipad.jpg"), 
(1, 1, "Like New nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "iPhone", 400, "public/images/iphone.jpg"), 
(1, 1, "Like New nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "Samsung S22", 400, "public/images/s22.jpg"), 
(1, 1, "Like New nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "Razer Orochi Mouse", 40, "public/images/orochi.jpg"), 
(1, 1, "Like New nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "Logitech Lightspeed Mouse", 10, "public/images/lightspeed.jpg");
INSERT INTO `GatorTrade`.`Items` (`category`, `seller`, `description`, `title`, `price`, `photopath`) VALUES 
(3, 1, "Cotton nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "Crochet Plush", 10, "public/images/plush.jpg"), 
(3, 1, "Cotton nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "Hoodies", 10, "public/images/hoodie.jpg"), 
(3, 1, "Leather nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "Wallet", 10, "public/images/wallet.jpg"), 
(3, 1, "Cotton nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "Blanket", 10, "public/images/blanket.jpeg"), 
(3, 1, "Silver nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "Earrings", 10, "public/images/earrings.jpg");
INSERT INTO `GatorTrade`.`Items` (`category`, `seller`, `description`, `title`, `price`, `photopath`) VALUES 
(4, 1, "Like New nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "CSC648 Textbook", 10, "public/images/csc-textbook.jpg"), 
(4, 1, "Like New nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "CSC600 Textbook", 10, "public/images/csc-textbook.jpg"), 
(4, 1, "Like New nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "BIOL101 Textbook", 10, "public/images/biol-textbook.jpg"), 
(4, 1, "Like New nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "Lab Goggles", 10, "public/images/lab-goggles.jpg"), 
(4, 1, "Like New nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "Lab Coat", 10, "public/images/lab-coat.jpg");
INSERT INTO `GatorTrade`.`Items` (`category`, `seller`, `description`, `title`, `price`, `photopath`) VALUES 
(5, 1, "Tastes Good nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "Spaghetti", 10, "public/images/spaghetti.jpg"), 
(5, 1, "Tastes Good nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "Meatballs", 10, "public/images/meatballs.jpg"), 
(5, 1, "Tastes Good nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "Cupcakes", 10, "public/images/cupcakes.jpg"), 
(5, 1, "Tastes Good nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "Italian Coffee", 10, "public/images/coffee.jpg"), 
(5, 1, "Tastes Good nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes", "Apple Pie", 10, "public/images/apple-pie.jpg");
