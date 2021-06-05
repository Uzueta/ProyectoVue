CREATE DATABASE `proyecto_web` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;

CREATE TABLE `categorias` (
  `CategoryID` int NOT NULL AUTO_INCREMENT,
  `CategoryName` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`CategoryID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

CREATE TABLE `persona` (
  `PersonaID` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Apellidos` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Telefono` char(10) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `Direccion` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`PersonaID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

CREATE TABLE `tickets` (
  `ticketsID` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Descripcion` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `Prioridad` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `PersonaID` int NOT NULL,
  `CategoryID` int NOT NULL,
  `Estatus` char(3) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`ticketsID`),
  KEY `persona_idx` (`PersonaID`),
  KEY `categoria-ticket_idx` (`CategoryID`),
  CONSTRAINT `categoria-ticket` FOREIGN KEY (`CategoryID`) REFERENCES `categorias` (`CategoryID`),
  CONSTRAINT `persona-ticket` FOREIGN KEY (`PersonaID`) REFERENCES `persona` (`PersonaID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;