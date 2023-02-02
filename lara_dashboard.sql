-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 02, 2023 at 07:33 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lara_dashboard`
--

-- --------------------------------------------------------

--
-- Table structure for table `produk`
--

CREATE TABLE `produk` (
  `id` int(11) NOT NULL,
  `file_path` varchar(256) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `deskripsi` varchar(256) NOT NULL,
  `harga` int(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `produk`
--

INSERT INTO `produk` (`id`, `file_path`, `nama`, `deskripsi`, `harga`, `created_at`, `updated_at`) VALUES
(23, 'produk/zDc6KBZujE1633RkUXp2IyS0sZPk8UaCYtLl2LPm.jpg', 'VortexSeries GT-9', 'Keyboard Mechanical', 1100000, '2023-01-25 21:21:50', '2023-01-25 21:21:50'),
(26, 'produk/BnzPeeUnGEvRvad3yd5Ksu7LORvNXrU8STfChPr9.jpg', 'VortexSeries GT-8', 'Keyboard Mechanical', 800000, '2023-01-25 21:22:43', '2023-01-25 21:22:43'),
(35, 'produk/Dl3jyB1KRzbpt7Xvyy90dmxYP7MHdViT81U5ze7d.jpg', 'VortexSeries GT-6', 'Keyboard Mechanical', 750000, '2023-01-25 21:46:44', '2023-01-25 21:46:44');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `nama`, `email`, `password`) VALUES
(1, 'Ucup', 'ucup@gmail.com', '$2y$10$i7Dgsik3bB3DB..mLJt2D.753grEFrMfcxXjy.OA9p.iFIJO90S.G'),
(2, 'Udin', 'udin@gmail.com', '$2y$10$6HLF7pjQ0sVU58/ttGFnaekyNpXFYCLqPBzbViyKmiUTHB9OD0A6y'),
(3, 'Wati', 'wati@gmail.com', '$2y$10$yjKCzrWb9oR1h6EgJqrUeeVV3hui71NcALvokA4okMmV1/VoPwozK'),
(4, 'Cantika', 'cantika@gmail.com', '$2y$10$D.N11tvgMt61QC4.F4cuSuySu2KuVwzQfmiwUNHnZmY0CBaRvYgGq'),
(5, 'Mawar', 'mawar@gmail.com', '$2y$10$tt.pqoXNNtlk7UEX3lyRueEmK6TbpnH4jswNxJFvCYUTkeUULnxkq'),
(30, 'Agus', 'agus@gmail.com', '$2y$10$RYgseXB46ecvUKzg.cALxOCV/Z2YxQqTaUqEcUo8TYftGgQVdyhBq');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `produk`
--
ALTER TABLE `produk`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `produk`
--
ALTER TABLE `produk`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
