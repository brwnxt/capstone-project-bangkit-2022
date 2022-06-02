-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 31 Bulan Mei 2022 pada 01.45
-- Versi server: 10.4.24-MariaDB
-- Versi PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `diseasedata_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `disease`
--

CREATE TABLE `disease` (
  `id` int(11) NOT NULL,
  `disease_name` varchar(200) DEFAULT NULL,
  `disease_image` varchar(255) DEFAULT NULL,
  `medicine_advice` text NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `disease`
--

INSERT INTO `disease` (`id`, `disease_name`, `disease_image`, `medicine_advice`, `createdAt`, `updatedAt`) VALUES
(7, 'sasa', 'Q3R2R21RQW3DFQF21D', 'beli jeruk 3', '2022-05-30', '2022-05-30'),
(11, NULL, NULL, '', '2022-05-30', '2022-05-30'),
(12, 'belibis', 'Q3R2R21RQW3DFQF21D', 'beli jeruk 3', '2022-05-30', '2022-05-30');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `disease`
--
ALTER TABLE `disease`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `disease`
--
ALTER TABLE `disease`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
