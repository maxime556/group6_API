DROP TABLE IF EXISTS `track`;

CREATE TABLE `track` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `album` varchar(255) DEFAULT NULL,
  `band` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `track` WRITE;

INSERT INTO `track` (`id`, `title`, `album`, `band`)
VALUES
	(1,'Odd eye', 'Road To Utopia', 'Dreamcatcher'),
	(2,'Scream', 'tree of language', 'Dreamcatcher'),
	(3,'Boca', 'Love myself', 'Dreamcatcher');

UNLOCK TABLES;
