-- FILE: db/GatorTrade_Model.sql
-- DESCRIPTION: SQL statements to create the database
-- CREATED BY: Ze
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE DATABASE IF NOT EXISTS `GatorTrade` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `GatorTrade`;

-- -----------------------------------------------------
-- Table `GatorTrade`.`Categories`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `GatorTrade`.`Categories` ;

CREATE TABLE IF NOT EXISTS `GatorTrade`.`Categories` (
  `idCategories` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idCategories`),
  UNIQUE INDEX `idCategories_UNIQUE` (`idCategories` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `GatorTrade`.`Users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `GatorTrade`.`Users` ;

CREATE TABLE IF NOT EXISTS `GatorTrade`.`Users` (
  `idUsers` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `password` VARCHAR(64) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `firstname` VARCHAR(45) NULL DEFAULT 'none',
  `lastname` VARCHAR(45) NULL DEFAULT 'none',
  `admin` TINYINT NULL DEFAULT 0,
  PRIMARY KEY (`idUsers`),
  UNIQUE INDEX `idUsers_UNIQUE` (`idUsers` ASC),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `GatorTrade`.`Items`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `GatorTrade`.`Items` ;

CREATE TABLE IF NOT EXISTS `GatorTrade`.`Items` (
  `idItems` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `category` INT UNSIGNED NOT NULL,
  `seller` INT UNSIGNED NOT NULL,
  `photopath` VARCHAR(4096) NULL DEFAULT 'none',
  `thumbnail` VARCHAR(4096) NULL,
  `title` VARCHAR(45) NULL DEFAULT 'none',
  `description` VARCHAR(128) NULL DEFAULT 'none',
  `price` DOUBLE UNSIGNED NULL,
  `approved` TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY (`idItems`),
  UNIQUE INDEX `idItems_UNIQUE` (`idItems` ASC),
  INDEX `ITEMS_CATEGORIES_FK_idx` (`category` ASC),
  INDEX `ITEMS_USERS_FK_idx` (`seller` ASC),
  CONSTRAINT `ITEMS_CATEGORIES_FK`
    FOREIGN KEY (`category`)
    REFERENCES `GatorTrade`.`Categories` (`idCategories`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `ITEMS_USERS_FK`
    FOREIGN KEY (`seller`)
    REFERENCES `GatorTrade`.`Users` (`idUsers`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `GatorTrade`.`Reviews`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `GatorTrade`.`Reviews` ;

CREATE TABLE IF NOT EXISTS `GatorTrade`.`Reviews` (
  `idReviews` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `reviewer` INT UNSIGNED NOT NULL,
  `reviewee` INT UNSIGNED NOT NULL,
  `rating` TINYINT(5) UNSIGNED NOT NULL,
  `header` VARCHAR(45) NULL,
  `body` VARCHAR(128) NULL,
  PRIMARY KEY (`idReviews`),
  UNIQUE INDEX `idReviews_UNIQUE` (`idReviews` ASC),
  INDEX `REVIEWS_USERS_FK_idx` (`reviewer` ASC),
  INDEX `REVIEWS_USERS_FK_idx1` (`reviewee` ASC),
  CONSTRAINT `REVIEWEES_USERS_FK`
    FOREIGN KEY (`reviewer`)
    REFERENCES `GatorTrade`.`Users` (`idUsers`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `REVIEWERS_USERS_FK`
    FOREIGN KEY (`reviewee`)
    REFERENCES `GatorTrade`.`Users` (`idUsers`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `GatorTrade`.`Messages`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `GatorTrade`.`Messages` ;

CREATE TABLE IF NOT EXISTS `GatorTrade`.`Messages` (
  `idMessages` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `item` INT UNSIGNED NOT NULL,
  `sender` INT UNSIGNED NOT NULL,
  `receiver` INT UNSIGNED NOT NULL,
  `body` VARCHAR(128) NULL,
  `date` DATETIME NULL DEFAULT now(),
  `read` TINYINT UNSIGNED NULL DEFAULT 0,
  PRIMARY KEY (`idMessages`),
  INDEX `SENDER_USERS_FK_idx` (`sender` ASC),
  INDEX `MESSAGEE_USERS_FK_idx` (`receiver` ASC),
  UNIQUE INDEX `idMessages_UNIQUE` (`idMessages` ASC),
  INDEX `MESSAGES_ITEMS_FK_idx` (`item` ASC),
  CONSTRAINT `SENDER_USERS_FK`
    FOREIGN KEY (`sender`)
    REFERENCES `GatorTrade`.`Users` (`idUsers`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `RECEIVER_USERS_FK`
    FOREIGN KEY (`receiver`)
    REFERENCES `GatorTrade`.`Users` (`idUsers`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `MESSAGES_ITEMS_FK`
    FOREIGN KEY (`item`)
    REFERENCES `GatorTrade`.`Items` (`idItems`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
