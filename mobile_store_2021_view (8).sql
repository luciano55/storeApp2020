-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-02-2021 a las 21:03:47
-- Versión del servidor: 10.4.13-MariaDB
-- Versión de PHP: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mobile_store_2021_view`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `AddClient` (IN `myName` VARCHAR(50), IN `mySurname` VARCHAR(100), IN `myNifNie` VARCHAR(9), IN `myMobile` VARCHAR(20), IN `myEmail` VARCHAR(100), IN `myBirdate` DATE, IN `myCP` VARCHAR(5), IN `myAddress` VARCHAR(100), OUT `response` BOOLEAN)  NO SQL
BEGIN
DECLARE message varchar(2000) DEFAULT "";

CALL mobile_store_2021.AddClient(myName, mySurname, myNifNie, myMobile, myEmail, myBirdate, myCP,myAddress,message);
IF locate("Error",message) THEN SET response = false;
 ELSE  SET response = true;
END IF;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `AddClientHistoric` (IN `myIdClient` INT, IN `operation` VARCHAR(20), OUT `message` BOOLEAN)  NO SQL
BEGIN

CALL mobile_store_2021.AddClientHistoric(myIdClient,operation,message);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `AddIpLocation` (IN `myIdClient` INT, IN `myIp` VARCHAR(15), IN `myCity` VARCHAR(100), IN `myCountry` VARCHAR(100), IN `myAction` VARCHAR(20), OUT `message` BOOLEAN)  NO SQL
BEGIN

CALL mobile_store_2021.AddIpLocation(myIdClient, myIp, myCity, myCountry, myAction, message);

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `AddVisit` (IN `myPage` VARCHAR(30), OUT `message` VARCHAR(100))  NO SQL
BEGIN


INSERT INTO mobile_store_2021_page.`visit`(`idPage`) VALUES ((SELECT idPage FROM mobile_store_2021_page.`page` WHERE pageName = myPage));
IF ROW_COUNT() > 0 THEN SET message = "OK: Visita Registrada";
ELSE SIGNAL SQLSTATE '42S02';
SET message = "Error: Visita NO Registrada";
SIGNAL SQLSTATE '42S02'
      SET MESSAGE_TEXT = 'A warning occurred', MYSQL_ERRNO = 1000;
END IF;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `BlockUser` (IN `myIdClient` INT, IN `myUUID` VARCHAR(50), OUT `message` BOOLEAN)  NO SQL
BEGIN

CALL mobile_store_2021.BlockUser(myIdClient,myUUID,message);

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `CheckingCredentialClient` (IN `myNif` VARCHAR(9), IN `myEmail` VARCHAR(150), OUT `message` BOOLEAN)  NO SQL
BEGIN

CALL mobile_store_2021.CheckingCredentialClient(myNif,myEmail,message);

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `CheckingLoginClient` (IN `myUser` VARCHAR(12), IN `myPassword` VARCHAR(15), OUT `message` BOOLEAN)  NO SQL
BEGIN
/*85407058P
SELECT count(*) FROM `client` WHERE `user` = "P851254" AND `password` = md5("Pp_0754")
*/
CALL mobile_store_2021.CheckingLoginClient(myUser,myPassword,message);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `CheckingLoginClientUpdate` (IN `myUser` VARCHAR(12), IN `myPassword` VARCHAR(15), IN `myIdClient` INT, OUT `message` BOOLEAN)  NO SQL
BEGIN

CALL mobile_store_2021.CheckingLoginClientUpdate(myUser,myPassword,myIdClient,message);


END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ClientIsBlocked` (IN `myIdClient` INT, OUT `message` BOOLEAN)  NO SQL
BEGIN

CALL mobile_store_2021.ClientIsBlocked(myIdClient,message);

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `CPExist_postalcode` (IN `myCP` VARCHAR(5), OUT `message` BOOLEAN)  NO SQL
BEGIN

SET message = (SELECT count(*) FROM mobile_store_2021.`postalcode` WHERE `postalCode` = myCP);

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `EmailExist_client` (IN `myEmail` VARCHAR(150), OUT `message` BOOLEAN)  NO SQL
BEGIN
SET message = (SELECT count(*) FROM mobile_store_2021.`client` WHERE `emailClient` = myEmail);

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ExistAnotherEmail` (IN `myIdClient` INT, IN `myEmail` VARCHAR(150), OUT `message` BOOLEAN)  NO SQL
BEGIN
SET message = (SELECT count(*)  FROM mobile_store_2021.`client` WHERE  `idClient` != myIdClient and `emailClient` = myEmail);



END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ExistAnotherMobile` (IN `myIdClient` INT, IN `myMobile` VARCHAR(20), OUT `message` BOOLEAN)  NO SQL
BEGIN
SET message = (SELECT count(*)  FROM mobile_store_2021.`client` WHERE  `idClient` != myIdClient and `mobileClient` = myMobile);



END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ExistAnotherNif` (IN `myIdClient` INT, IN `myNif` VARCHAR(9), OUT `message` BOOLEAN)  NO SQL
BEGIN
SET message = (SELECT count(*)  FROM mobile_store_2021.`client` WHERE  `idClient` != myIdClient and `nifClient` = myNif);



END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `GetCountVisit` (IN `myPage` VARCHAR(30), OUT `countVisit` INT)  NO SQL
BEGIN

SET countVisit =  (SELECT count(*) FROM mobile_store_2021_page.`visit` WHERE `idPage`= (SELECT `idPage` FROM mobile_store_2021_page.`page` WHERE `pageName` = myPage));
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `GetCpExtremadura` ()  NO SQL
BEGIN

CALL mobile_store_2021.GetCpExtremadura();
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `GetDataPerson` (IN `myIdClient` INT, OUT `myName` VARCHAR(50), OUT `mySurname` VARCHAR(100), OUT `myNif` VARCHAR(20), OUT `myMobile` VARCHAR(150), OUT `myEmail` VARCHAR(150), OUT `myBirthdate` VARCHAR(12), OUT `myPostalCode` VARCHAR(5), OUT `myAddress` VARCHAR(100))  NO SQL
BEGIN

CALL mobile_store_2021.GetDataPerson(myIdClient, myName, mySurname, myNif, myMobile, myEmail, myBirthdate, myPostalCode,  myAddress);

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `GetEmailFromUser` (IN `myUser` VARCHAR(7), OUT `message` VARCHAR(150))  NO SQL
BEGIN

CALL mobile_store_2021.GetEmailFromUser(myUser,message);

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `GetIdClient` (IN `myNif` VARCHAR(9), OUT `myIdClient` INT(4))  NO SQL
BEGIN

CALL mobile_store_2021.GetIdClient(myNif,myIdClient);

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `GetIdClientFromUser` (IN `myUser` VARCHAR(7), OUT `myIdClient` INT)  NO SQL
BEGIN

CALL mobile_store_2021.GetIdClientFromUser(myUser,myIdClient);

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `GetLockKey` (IN `myEmail` VARCHAR(150), OUT `myUUID` VARCHAR(50))  NO SQL
BEGIN

CALL mobile_store_2021.GetLockKey(myEmail,myUUID);

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `GetLoginInit` (IN `myEmail` VARCHAR(150), OUT `myUser` VARCHAR(7), OUT `myPassword` VARCHAR(15))  NO SQL
BEGIN
CALL  mobile_store_2021.GetLoginInit(myEmail, myUser, myPassword);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `GetPage` (IN `myPage` VARCHAR(100), OUT `htmlTxt` VARCHAR(30000))  NO SQL
BEGIN

CALL mobile_store_2021_page.GetPage((SELECT `idPage` FROM mobile_store_2021_page.page WHERE `pageName` = myPage), htmlTxt);

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `GetUserFromIdClient` (IN `myIdClient` INT, OUT `myUser` VARCHAR(15))  NO SQL
BEGIN

CALL mobile_store_2021.GetUserFromIdClient(myIdClient,myUser);


END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `MobileExist_client` (IN `myMobile` VARCHAR(20), OUT `message` BOOLEAN)  NO SQL
BEGIN
SET message = (SELECT count(*) FROM mobile_store_2021.`client` WHERE `mobileClient` = myMobile);

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `NifExist_client` (IN `myNif` VARCHAR(9), OUT `message` BOOLEAN)  NO SQL
BEGIN
SET message = (SELECT count(*) FROM mobile_store_2021.`client` WHERE `nifClient` = myNif);

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `UnlockUser` (IN `myEmail` VARCHAR(150), IN `myUUID` VARCHAR(50), OUT `message` BOOLEAN)  NO SQL
BEGIN

CALL mobile_store_2021.UnlockUser(myEmail,myUUID,message);

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `UnlockUserUUID` (IN `myUUID` VARCHAR(50), OUT `message` BOOLEAN)  NO SQL
BEGIN
CALL mobile_store_2021.UnlockUserUUID(myUUID, message);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateClient` (IN `myIdClient` INT, IN `myName` VARCHAR(50), IN `mySurname` VARCHAR(100), IN `myNifNie` VARCHAR(9), IN `myMobile` VARCHAR(20), IN `myEmail` VARCHAR(150), IN `myDateBird` VARCHAR(12), IN `myCP` VARCHAR(5), IN `myAddress` VARCHAR(100), OUT `message` VARCHAR(2000))  NO SQL
BEGIN

CALL mobile_store_2021.UpdateClient(myIdClient, myName, mySurname, myNifNie, myMobile, myEmail, myDateBird, myCP,  myAddress, message);


END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateCredential` (IN `myNif` VARCHAR(9), OUT `message` BOOLEAN)  NO SQL
BEGIN

CALL mobile_store_2021.UpdateCredential(myNif,message);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateLogin` (IN `myIdClient` INT, IN `myUser` VARCHAR(15), IN `myPassword` VARCHAR(50), OUT `message` VARCHAR(2000))  NO SQL
BEGIN

CALL mobile_store_2021.UpdateLogin(myIdClient,myUser,myPassword,message);


END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `productstore`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `productstore` (
`id` int(11)
,`id_producto` int(11)
,`referencia` varchar(30)
,`modelo` varchar(200)
,`id_proveedor` int(11)
,`proveedor` varchar(200)
,`precio` float
,`stock` int(11)
,`descuento` int(11)
,`memoria` varchar(30)
,`brand` varchar(50)
,`image_model` varchar(200)
,`image_rear` varchar(200)
,`image_side` varchar(200)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `shopping_cart`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `shopping_cart` (
`id_client` tinyint(4)
,`id_product` int(11)
,`model` varchar(200)
,`units` int(11)
,`price` float
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `shopping_cart_view`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `shopping_cart_view` (
`id_client` tinyint(4)
,`id_product` int(11)
,`units` int(11)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `storeproduct`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `storeproduct` (
`referencia` varchar(30)
,`modelo` varchar(200)
,`idProveedor` int(11)
,`nombreProveedor` varchar(200)
,`idProducto` int(11)
,`precio` float
,`stock` int(11)
,`descuento` float
,`memoria` varchar(30)
);

-- --------------------------------------------------------

--
-- Estructura para la vista `productstore`
--
DROP TABLE IF EXISTS `productstore`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `productstore`  AS  select `s`.`idProduct` AS `id`,`s`.`idProduct` AS `id_producto`,`s`.`referencia_sku` AS `referencia`,`m`.`modelName` AS `modelo`,`s`.`IdProvider` AS `id_proveedor`,`p`.`providerFullName` AS `proveedor`,`s`.`salePrice` AS `precio`,`s`.`stockCurrent` AS `stock`,`s`.`percentageDiscount` AS `descuento`,`s`.`memory` AS `memoria`,`b`.`brandName` AS `brand`,`m`.`imageModel` AS `image_model`,`m`.`imageRear` AS `image_rear`,`m`.`imageSide` AS `image_side` from (((`mobile_store_2021`.`shop_product` `s` join `mobile_store_2021`.`model` `m`) join `mobile_store_2021`.`provider` `p`) join `mobile_store_2021`.`brand` `b`) where `s`.`referencia_sku` = `m`.`referencia_sku` and `s`.`IdProvider` = `p`.`idProvider` and `m`.`idBrand` = `b`.`idBrand` ;

-- --------------------------------------------------------

--
-- Estructura para la vista `shopping_cart`
--
DROP TABLE IF EXISTS `shopping_cart`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `shopping_cart`  AS  select `s`.`idClient` AS `id_client`,`s`.`idProduct` AS `id_product`,`m`.`modelName` AS `model`,`s`.`units` AS `units`,`p`.`salePrice` AS `price` from ((`mobile_store_2021`.`shopping_cart` `s` join `mobile_store_2021`.`model` `m`) join `mobile_store_2021`.`shop_product` `p`) where `s`.`idProduct` = `p`.`idProduct` and `p`.`referencia_sku` = `m`.`referencia_sku` ;

-- --------------------------------------------------------

--
-- Estructura para la vista `shopping_cart_view`
--
DROP TABLE IF EXISTS `shopping_cart_view`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `shopping_cart_view`  AS  select `s`.`idClient` AS `id_client`,`s`.`idProduct` AS `id_product`,`s`.`units` AS `units` from `mobile_store_2021`.`shopping_cart` `s` ;

-- --------------------------------------------------------

--
-- Estructura para la vista `storeproduct`
--
DROP TABLE IF EXISTS `storeproduct`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `storeproduct`  AS  select `s`.`referencia_sku` AS `referencia`,`m`.`modelName` AS `modelo`,`s`.`IdProvider` AS `idProveedor`,`p`.`providerFullName` AS `nombreProveedor`,`s`.`idProduct` AS `idProducto`,`s`.`salePrice` AS `precio`,`s`.`stockCurrent` AS `stock`,`s`.`discountBonus` AS `descuento`,`s`.`memory` AS `memoria` from ((`mobile_store_2021`.`shop_product` `s` join `mobile_store_2021`.`provider` `p`) join `mobile_store_2021`.`model` `m`) where `s`.`IdProvider` = `p`.`idProvider` and `s`.`referencia_sku` = `m`.`referencia_sku` ;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
