
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

-- Database: `IntProjectManager`

--
-- Table structure for table `adminauth`
--

CREATE TABLE `adminauth` (
  `adm_id` int(11) NOT NULL,
  `name` varchar(80) DEFAULT NULL,
  `email` varchar(80) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY `adm_id`,
  `role` varchar(10) DEFAULT 'admin'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `id` int(11) NOT NULL,
  `name` varchar(155) NOT NULL,
  `contact` varchar(15) DEFAULT NULL,
  `altcontact` varchar(15) DEFAULT NULL,
  `email` varchar(155) DEFAULT NULL,
  `address` varchar(155) DEFAULT NULL,
  `oth_details` varchar(155) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO `clients` (`id`, `name`, `contact`, `altcontact`, `email`,  `address`, `oth_details`) VALUES (1, "Panchanan Deka", "6002649802", "6000192289", "dekapachanan@gmail.com", "Nabin Nagar, Guwahati", "empty"), (2, "Mintu Sharma", "7779885160", "7636896075", "sharma@gmail.com", "Jajori, Nagaon", "I'm a developer")
--
-- Table structure for table `deals`
--

CREATE TABLE `projects` (
  `id` bigint(20) NOT NULL,
  `client_name` varchar(200) DEFAULT NULL,
  `contact` bigint(15) DEFAULT NULL,
  `altcontact` varchar(15) DEFAULT NULL,
  `email` varchar(80) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `oth_details` varchar(155) DEFAULT NULL,
  `project_name` varchar(300) DEFAULT NULL,
  `project_deadline` varchar(30) DEFAULT NULL
  `advance_amount` int(11) DEFAULT NULL,
  `total_amount` int(11) DEFAULT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
