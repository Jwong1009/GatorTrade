-- SQL insert statements for messages
INSERT INTO `GatorTrade`.`Messages` (`item`,`sender`, `receiver`,`body`) VALUES 
(3,1,6," Lorem ipsum dolor sit amet, consectetur adipiscing.");
INSERT INTO `GatorTrade`.`Messages` (`item`,`sender`, `receiver`,`body`) VALUES 
(7,6,1,"nsectetur adipiscing elit, sed do e.");
INSERT INTO `GatorTrade`.`Messages` (`item`,`sender`, `receiver`,`body`) VALUES 
(10,5,6,"Insectetur adipiscing elit, sed do e. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei.");
INSERT INTO `GatorTrade`.`Messages` (`item`,`sender`, `receiver`,`body`) VALUES 
(4,2,6,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei.");
INSERT INTO `GatorTrade`.`Messages` (`item`,`sender`, `receiver`,`body`) VALUES 
(11,1,6,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei. Lorem ipsum dolor sit amet, co.");
INSERT INTO `GatorTrade`.`Messages` (`item`,`sender`, `receiver`,`body`) VALUES 
(13,3,6," Lorem ipsum dolor sit amet, consectetur a Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei.");

-- SQL insert statements for reviews
INSERT INTO `GatorTrade`.`Reviews` (`header`,`rating`,`reviewer`, `reviewee`,`body`) VALUES 
("Review No. 1", 4, 1 ,6,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
INSERT INTO `GatorTrade`.`Reviews` (`header`,`rating`,`reviewer`, `reviewee`,`body`) VALUES 
("Review No. 2", 5, 4 ,6,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
INSERT INTO `GatorTrade`.`Reviews` (`header`,`rating`,`reviewer`, `reviewee`,`body`) VALUES 
("Review No. 3", 2, 6 ,2,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor.");