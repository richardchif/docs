-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 14, 2020 at 05:53 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.2.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `edocs`
--

-- --------------------------------------------------------

--
-- Table structure for table `internalorder`
--

CREATE TABLE `internalorder` (
  `ID` int(11) NOT NULL,
  `DptFrom` varchar(50) NOT NULL,
  `DptTo` varchar(50) NOT NULL,
  `Branch` varchar(50) NOT NULL,
  `RequestedBy` varchar(200) NOT NULL,
  `RequestedByEmail` varchar(500) NOT NULL,
  `AuthorisedBy` varchar(100) NOT NULL,
  `Date` date NOT NULL,
  `Code` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `internalorder`
--

INSERT INTO `internalorder` (`ID`, `DptFrom`, `DptTo`, `Branch`, `RequestedBy`, `RequestedByEmail`, `AuthorisedBy`, `Date`, `Code`) VALUES
(45, 'PIR', 'Accounts', 'Harare', 'Richard Chifamba', 'rchifamba@nbsz.co.zw', 'mnhemachena@nbsz.co.zw', '2020-08-11', 0),
(46, 'PIR', 'Accounts', 'Harare', 'Richard Sniper', 'rchifamba@nbsz.co.zw', 'mnhemachena@nbsz.co.zw', '2020-08-11', 0),
(47, 'PIR', 'Accounts', 'Harare', 'Richard Chifamba', 'rchifamba@nbsz.co.zw', 'mnhemachena@nbsz.co.zw', '2020-08-12', 0),
(48, 'PIR', 'Accounts', 'Harare', 'Richard Chifamba', 'rchifamba@nbsz.co.zw', 'mnhemachena@nbsz.co.zw', '2020-08-14', 0),
(49, 'PIR', 'Accounts', 'Harare', 'Richard Chifamba', 'rchifamba@nbsz.co.zw', 'mnhemachena@nbsz.co.zw', '2020-08-14', 0);

-- --------------------------------------------------------

--
-- Table structure for table `internalorder_items`
--

CREATE TABLE `internalorder_items` (
  `ID` int(11) NOT NULL,
  `Description` varchar(500) NOT NULL,
  `Quantity` double NOT NULL,
  `Comment` varchar(500) NOT NULL,
  `ID_Key` varchar(11) NOT NULL,
  `Approved` tinyint(1) NOT NULL,
  `Collected` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `internalorder_items`
--

INSERT INTO `internalorder_items` (`ID`, `Description`, `Quantity`, `Comment`, `ID_Key`, `Approved`, `Collected`) VALUES
(15, 'Note books', 4, 'For ICT intern', '0', 0, 0),
(16, 'Note books', 4, 'For ICT interns', '0', 0, 0),
(17, 'Note books', 4, 'For ICT intern', '0', 0, 0),
(18, 'Note books', 4, 'For ICT intern', '45', 1, 1),
(19, 'Black pen', 2, 'For ICT intern', '46', 1, 1),
(20, 'A2 Printer Catridge', 1, 'For ICT section', '46', 1, 1),
(21, 'Note books', 1, 'For ICT intern', '47', 1, 1),
(22, 'Pencil', 1, 'For ICT intern', '47', 1, 1),
(23, 'Note books', 1, 'For ICT intern', '48', 1, 1),
(24, 'Pen', 1, 'For ICT intern', '49', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `ID` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Surname` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Department` varchar(500) NOT NULL,
  `Password` varchar(5000) NOT NULL,
  `Approved` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`ID`, `Name`, `Surname`, `Email`, `Department`, `Password`, `Approved`) VALUES
(1, 'Richard', 'Chifamba', 'rchifamba@nbsz.co.zw', 'PIR', '123', 1),
(2, 'Jasper', 'Chifamba', 'jasper@nbsz.co.zw', 'Accounts', '123', 1),
(4, 'Micah', 'Nhema', 'mnhemachena@nbsz.co.zw', 'PIR', 'pass', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `internalorder`
--
ALTER TABLE `internalorder`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `internalorder_items`
--
ALTER TABLE `internalorder_items`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `internalorder`
--
ALTER TABLE `internalorder`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `internalorder_items`
--
ALTER TABLE `internalorder_items`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
