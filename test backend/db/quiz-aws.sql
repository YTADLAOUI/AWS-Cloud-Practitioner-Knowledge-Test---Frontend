-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 02 jan. 2023 à 09:48
-- Version du serveur : 10.4.24-MariaDB
-- Version de PHP : 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `quiz-aws`
--

-- --------------------------------------------------------

--
-- Structure de la table `answers`
--

CREATE TABLE `answers` (
  `id` int(11) NOT NULL,
  `answer` varchar(255) NOT NULL,
  `type` int(11) NOT NULL DEFAULT 0,
  `question_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `answers`
--

INSERT INTO `answers` (`id`, `answer`, `type`, `question_id`) VALUES
(1, 'Amazon EC2 costs are billed on a monthly basis', 0, 1),
(2, 'Users retain full administrative access to their Amazon EC2 instances', 0, 1),
(3, 'Amazon EC2 instances can be launched on demand when needed', 1, 1),
(4, 'Users can permanently run enough instances to handle peak workloads', 0, 1),
(5, 'AWS Storage Gateway', 0, 2),
(6, 'AWS Database Migration Service (AWS DMS)', 1, 2),
(7, 'Amazon EC2', 0, 2),
(8, 'Amazon AppStream 2.0', 0, 2),
(9, 'AWS Config', 0, 3),
(10, ' AWS OpsWorks', 0, 3),
(11, 'AWS SDK', 0, 3),
(12, 'AWS Marketplace', 1, 3),
(13, ' AWS Config', 0, 4),
(14, 'Amazon Route 53', 0, 4),
(15, 'AWS Direct Connect', 0, 4),
(16, 'Amazon Virtual Private Cloud (Amazon VPC)', 1, 4),
(17, 'Configuring third-party applications', 0, 5),
(18, 'Maintaining physical hardware', 1, 5),
(19, 'Securing application access and data', 0, 5),
(20, ' Managing guest operating systems', 0, 5),
(21, 'AWS Regions', 0, 6),
(22, 'Edge locations', 1, 6),
(23, ' Availability Zones', 0, 6),
(24, 'Virtual Private Cloud (VPC)', 0, 6),
(25, ' Use Amazon Cloud Directory', 0, 7),
(26, 'Audit AWS Identity and Access Management (IAM) roles', 0, 7),
(27, 'Enable multi-factor authentication', 1, 7),
(28, 'Enable AWS CloudTrail', 0, 7),
(29, 'AWS Trusted Advisor', 0, 8),
(30, 'AWS CloudTrail', 1, 8),
(31, 'AWS X-Ray', 0, 8),
(32, 'AWS Identity and Access Management (AWS IAM)', 0, 8),
(33, 'Amazon Simple Notification Service (Amazon SNS)', 1, 9),
(34, 'AWS CloudTrail', 0, 9),
(35, 'AWS Trusted Advisor', 0, 9),
(36, 'Amazon Route 53', 0, 9),
(37, 'AWS Trusted Advisor', 0, 10),
(38, 'AWS Identity and Access Management (IAM)', 0, 10),
(39, 'AWS Billing Console', 0, 10),
(40, 'AWS Acceptable Use Policy', 1, 10);

-- --------------------------------------------------------

--
-- Structure de la table `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `question` varchar(255) NOT NULL,
  `explanation` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `questions`
--

INSERT INTO `questions` (`id`, `question`, `explanation`) VALUES
(1, 'Why is AWS more economical than traditional data centers for applications with varying compute workloads?\n', 'The ability to launch instances on demand when needed allows users to launch and terminate instances in\nresponse to a varying workload. This is a more economical practice than purchasing enough on-premises servers\nto handle the peak load.\n'),
(2, 'Which AWS service would simplify the migration of a database to AWS?', 'AWS DMS helps users migrate databases to AWS quickly and securely. The source database remains\nfully operational during the migration, minimizing downtime to applications that rely on the database. AWS DMS\ncan migrate data to and from most widely used commercial and open-source databases.'),
(3, 'Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment?', 'AWS Marketplace is a digital catalog with thousands of software listings from independent software\nvendors that makes it easy to find, test, buy, and deploy software that runs on AWS.\n'),
(4, 'Which AWS networking service enables a company to create a virtual network within AWS?', 'Amazon VPC lets users provision a logically isolated section of the AWS Cloud where users can launch\nAWS resources in a virtual network that they define.\n'),
(5, 'Which of the following is an AWS responsibility under the AWS shared responsibility model?', 'Maintaining physical hardware is an AWS responsibility under the AWS shared responsibility model.'),
(6, 'Which component of the AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?', 'To deliver content to users with lower latency, Amazon CloudFront uses a global network of points of\npresence (edge locations and regional edge caches) worldwide. '),
(7, 'How would a system administrator add an additional layer of login security to a user\'s AWS Management Console?', 'Multi-factor authentication (MFA) is a simple best practice that adds an extra layer of protection on top of a\nusername and password. With MFA enabled, when a user signs in to an AWS Management Console, they will be\nprompted for their username and password (the first factor—what they know), as well as for an authentication\ncode from their MFA device (the second factor—what they have). Taken together, these multiple factors provide\nincreased security for AWS account settings and resources.'),
(8, 'Which service can identify the user that made the API call when an Amazon EC2 instance is terminated?', 'AWS CloudTrail helps users enable governance, compliance, and operational and risk auditing of their\nAWS accounts. Actions taken by a user, role, or an AWS service are recorded as events in CloudTrail. Events\ninclude actions taken in the AWS Management Console, AWS Command Line Interface (CLI), and AWS SDKs\nand APIs.\n'),
(9, 'Which service would be used to send alerts based on Amazon CloudWatch alarms?', 'Amazon SNS and Amazon CloudWatch are integrated so users can collect, view, and analyze metrics for\nevery active SNS. Once users have configured CloudWatch for Amazon SNS, they can gain better insight into the\nperformance of their Amazon SNS topics, push notifications, and SMS deliveries.'),
(10, 'Where can a user find information about prohibited actions on the AWS infrastructure?', 'The AWS Acceptable Use Policy provides information regarding prohibited actions on the AWS\ninfrastructure.');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `answers`
--
ALTER TABLE `answers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT pour la table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
