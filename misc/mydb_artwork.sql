-- MySQL dump 10.13  Distrib 5.7.33, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: mydb
-- ------------------------------------------------------
-- Server version	5.7.33-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `artwork`
--

DROP TABLE IF EXISTS `artwork`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `artwork` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(90) NOT NULL,
  `descriptionWork` varchar(512) NOT NULL,
  `image` varchar(512) NOT NULL,
  `artist_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`artist_id`),
  KEY `fk_artwork_artist_idx` (`artist_id`),
  CONSTRAINT `fk_artwork_artist` FOREIGN KEY (`artist_id`) REFERENCES `artist` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artwork`
--

LOCK TABLES `artwork` WRITE;
/*!40000 ALTER TABLE `artwork` DISABLE KEYS */;
INSERT INTO `artwork` VALUES (1,'Untitled','Black and white photography, analogique, 2020','https://zupimages.net/up/21/05/bsuf.jpg',2),(2,'Untitled','Black and white photography, analogique, 2020','https://zupimages.net/up/21/05/z7y4.jpg',2),(3,'Untitled','Black and white photography, analogique, 2020','https://zupimages.net/up/21/05/jolw.jpg',2),(4,'Untitled','Black and white photography, analogique, 2020','https://zupimages.net/up/21/05/wyud.jpg',2),(5,'Untitled','Black and white photography, analogique, 2020','https://zupimages.net/up/21/05/n0jb.jpg',2),(6,'Untitled','Black and white photography, analogique, 2020','https://zupimages.net/up/21/05/65cm.jpg',2),(7,'Untitled','Black and white photography, analogique, 2020','https://zupimages.net/up/21/05/oj3c.jpg',2),(13,'Untitled','Analog photography, color, 2020','https://zupimages.net/up/21/05/jyzk.jpg',5),(14,'Untitled','Analog photography, color, 2020','https://zupimages.net/up/21/05/eg21.jpg',5),(15,'Untitled','Analog photography, color, 2020','https://zupimages.net/up/21/05/lj6p.jpg',5),(16,'Untitled','Analog photography, color, 2020','https://zupimages.net/up/21/05/y8d1.jpg',5),(17,'Untitled','Analog photography, Black and white, 2020','https://zupimages.net/up/21/05/fu18.jpg',5),(18,'Untitled','Digital photography, street photography, 2020','https://zupimages.net/up/21/05/fzrc.jpg',4),(19,'Untitled','Digital photography, street photography, 2020','https://zupimages.net/up/21/05/dzzn.jpg',4),(20,'Untitled','Digital photography, street photography, 2020','https://zupimages.net/up/21/05/1jaq.jpg',4),(21,'Untitled','Digital photography, street photography, 2020','https://zupimages.net/up/21/05/3hh0.jpg',4),(22,'Untitled','Digital photography, street photography, 2020','https://zupimages.net/up/21/05/ckvv.jpg',4),(23,'Untitled','Painting, Technic mix, 2020','https://zupimages.net/up/21/05/qptm.jpg',3),(24,'Untitled','Painting, Technic mix, 2020','https://zupimages.net/up/21/05/ba23.jpg',3),(25,'Untitled','Painting, Technic mix, 2020','https://zupimages.net/up/21/05/s2au.jpg',3),(26,'Untitled','Painting, Technic mix, 2020','https://zupimages.net/up/21/05/0y3f.jpg',3);
/*!40000 ALTER TABLE `artwork` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-04 14:51:19
