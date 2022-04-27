CREATE DATABASE  IF NOT EXISTS `mailsbd` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `mailsbd`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: mailsbd
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `mails`
--

DROP TABLE IF EXISTS `mails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mails` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Author` varchar(30) DEFAULT NULL,
  `Direction` tinyint(1) DEFAULT NULL,
  `Folder` varchar(20) DEFAULT NULL,
  `Isread` tinyint(1) DEFAULT NULL,
  `Label` tinyint(1) DEFAULT NULL,
  `Title` varchar(40) DEFAULT NULL,
  `Mailtext` text,
  `Maildata` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mails`
--

LOCK TABLES `mails` WRITE;
/*!40000 ALTER TABLE `mails` DISABLE KEYS */;
INSERT INTO `mails` VALUES (3,'Вася',1,'Sent',1,0,'Пошли гулять','Привет, Вася!\nпойдём гулять?','2022-04-19 23:41:37'),(4,'Вася',0,'Incoming',0,0,'Пошли гулять','Привет!\nВо сколько?','2022-04-19 23:42:46'),(5,'Маша',1,'Sent',0,0,'Домашнее задание','Привет!\nЧто задали по математике, не подскажешь?','2022-04-19 23:43:43'),(6,'Маша',0,'Draft',0,0,'Дз','Дз подскажешь?','2022-04-19 23:47:03'),(7,'Магазин на диване',0,'Spam',0,0,'Холодильник','Вы выиграли холодильник! Перейдите по ссылке','2022-04-19 23:54:25'),(8,'Магазин под диваном',0,'Spam',0,0,'Скидка!!!1','При регистрации на нашем сайте Вы получите промокод на скидку 50%. Переходите...','2022-04-19 23:54:25'),(9,'Магазин на диване',0,'Spam',0,0,'Пылесос','Вы выиграли пылесос! Перейдите по ссылке и получите его','2022-04-19 23:54:25'),(10,'Ffdfsafa',0,'Deleted',1,0,'sdafffsd','1223243dfsdfasd!!!fdfsdfsd-_-!','2022-04-19 23:57:31'),(11,'111Ffdfs!!!a',0,'Deleted',1,0,'sdafsdfs','J_J!','2022-04-19 23:57:31'),(12,'Ffdfsafa',0,'Deleted',1,0,'s####!','._.','2022-04-19 23:57:31'),(13,'Ffdfsafa',0,'Deleted',1,0,'sdafdsfffsd','.-.','2022-04-19 23:57:31');
/*!40000 ALTER TABLE `mails` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-27 18:42:54
