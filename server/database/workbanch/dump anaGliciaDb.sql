CREATE DATABASE  IF NOT EXISTS `anaglicia` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `anaglicia`;
-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: anaglicia
-- ------------------------------------------------------
-- Server version	8.0.21

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
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id_categoria` int unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(80) NOT NULL,
  PRIMARY KEY (`id_categoria`),
  UNIQUE KEY `id_categoria_UNIQUE` (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `cidades`
--

DROP TABLE IF EXISTS `cidades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cidades` (
  `id_cidade` int unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(120) NOT NULL,
  `fk_estado` int unsigned NOT NULL,
  PRIMARY KEY (`id_cidade`),
  UNIQUE KEY `id_cidade_UNIQUE` (`id_cidade`),
  KEY `fk_cidades_estados1_idx` (`fk_estado`),
  CONSTRAINT `fk_estado` FOREIGN KEY (`fk_estado`) REFERENCES `estados` (`id_estado`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `enderecos_obras`
--

DROP TABLE IF EXISTS `enderecos_obras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enderecos_obras` (
  `id_endereco_obra` int unsigned NOT NULL AUTO_INCREMENT,
  `endereco` varchar(255) NOT NULL,
  `numero` varchar(5) NOT NULL,
  `bairro` varchar(60) NOT NULL,
  `cep` varchar(8) NOT NULL,
  `complemento` varchar(255) DEFAULT NULL,
  `fk_cidade` int unsigned NOT NULL,
  PRIMARY KEY (`id_endereco_obra`),
  UNIQUE KEY `id_endereco_UNIQUE` (`id_endereco_obra`),
  KEY `fk_enderecos_cidades1_idx` (`fk_cidade`),
  CONSTRAINT `fk_enderecos_cidades10` FOREIGN KEY (`fk_cidade`) REFERENCES `cidades` (`id_cidade`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `enderecos_residenciais`
--

DROP TABLE IF EXISTS `enderecos_residenciais`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enderecos_residenciais` (
  `id_endereco_res` int unsigned NOT NULL AUTO_INCREMENT,
  `endereco` varchar(255) NOT NULL,
  `numero` varchar(5) NOT NULL,
  `bairro` varchar(60) NOT NULL,
  `cep` varchar(8) NOT NULL,
  `complemento` varchar(255) DEFAULT NULL,
  `fk_cidade` int unsigned NOT NULL,
  PRIMARY KEY (`id_endereco_res`),
  UNIQUE KEY `id_endereco_UNIQUE` (`id_endereco_res`),
  KEY `fk_enderecos_cidades1_idx` (`fk_cidade`),
  CONSTRAINT `fk_enderecos_cidades1` FOREIGN KEY (`fk_cidade`) REFERENCES `cidades` (`id_cidade`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `estados`
--

DROP TABLE IF EXISTS `estados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estados` (
  `id_estado` int unsigned NOT NULL AUTO_INCREMENT,
  `uf` varchar(2) NOT NULL,
  PRIMARY KEY (`id_estado`),
  UNIQUE KEY `id_estado_UNIQUE` (`id_estado`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `projetos`
--

DROP TABLE IF EXISTS `projetos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projetos` (
  `id_projeto` int unsigned NOT NULL AUTO_INCREMENT,
  `descricao` varchar(80) NOT NULL,
  `area_terreno` varchar(6) NOT NULL,
  `area_construida` varchar(6) NOT NULL,
  `tipologia` varchar(150) NOT NULL,
  `url_img_1` varchar(500) NOT NULL,
  `url_img_2` varchar(500) NOT NULL,
  `url_img_3` varchar(500) NOT NULL,
  `url_img_4` varchar(500) NOT NULL,
  `url_img_5` varchar(500) NOT NULL,
  `fk_categoria` int unsigned NOT NULL,
  `fk_endereco_obra` int unsigned NOT NULL,
  `fk_usuario` int unsigned NOT NULL,
  PRIMARY KEY (`id_projeto`),
  UNIQUE KEY `id_projeto_UNIQUE` (`id_projeto`),
  KEY `fk_projetos_categorias_idx` (`fk_categoria`),
  KEY `fk_projetos_enderecos_obras1_idx` (`fk_endereco_obra`),
  KEY `fk_projetos_clientes1_idx` (`fk_usuario`),
  CONSTRAINT `fk_projetos_categorias` FOREIGN KEY (`fk_categoria`) REFERENCES `categorias` (`id_categoria`),
  CONSTRAINT `fk_projetos_clientes1` FOREIGN KEY (`fk_usuario`) REFERENCES `usuarios` (`id_usuario`),
  CONSTRAINT `fk_projetos_enderecos_obras1` FOREIGN KEY (`fk_endereco_obra`) REFERENCES `enderecos_obras` (`id_endereco_obra`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id_usuario` int unsigned NOT NULL AUTO_INCREMENT,
  `nome_completo` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `data_nascimento` date NOT NULL,
  `pessoa_juridica` tinyint DEFAULT '0',
  `cpf_cnpj` varchar(14) NOT NULL,
  `telefone_1` varchar(11) NOT NULL,
  `telefone_2` varchar(11) DEFAULT NULL,
  `nome_usuario` varchar(80) DEFAULT NULL,
  `senha` text,
  `nivel_acesso` enum('cliente','administrador') DEFAULT 'cliente',
  `fk_endereco_residencial` int unsigned NOT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `id_cliente_UNIQUE` (`id_usuario`),
  UNIQUE KEY `cpf_UNIQUE` (`cpf_cnpj`),
  KEY `fk_clientes_enderecos_residenciais1_idx` (`fk_endereco_residencial`),
  CONSTRAINT `fk_clientes_enderecos_residenciais1` FOREIGN KEY (`fk_endereco_residencial`) REFERENCES `enderecos_residenciais` (`id_endereco_res`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping events for database 'anaglicia'
--

--
-- Dumping routines for database 'anaglicia'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-05 21:13:43
