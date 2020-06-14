-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Июн 07 2020 г., 22:50
-- Версия сервера: 5.5.25
-- Версия PHP: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `medical`
--

-- --------------------------------------------------------

--
-- Структура таблицы `clients`
--

CREATE TABLE IF NOT EXISTS `clients` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `clinic_id` int(11) NOT NULL,
  `fio` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `registration` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bday` date NOT NULL,
  `phone` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=2 ;

--
-- Дамп данных таблицы `clients`
--

INSERT INTO `clients` (`id`, `clinic_id`, `fio`, `registration`, `bday`, `phone`) VALUES
(1, 1, 'Иванов Иван Иванович', 'Улица Пушкина, дом 14', '2020-05-06', '+7(902)434-04-10');

-- --------------------------------------------------------

--
-- Структура таблицы `records`
--

CREATE TABLE IF NOT EXISTS `records` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `clinic_id` int(11) NOT NULL,
  `datetime` datetime NOT NULL,
  `service_id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL,
  `stuff_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Дамп данных таблицы `records`
--

INSERT INTO `records` (`id`, `clinic_id`, `datetime`, `service_id`, `client_id`, `stuff_id`) VALUES
(1, 1, '2020-06-02 09:30:00', 1, 1, 1),
(2, 1, '2020-06-02 10:30:00', 2, 2, 2),
(3, 1, '2020-06-07 12:00:00', 2, 1, 1),
(4, 1, '2020-06-07 13:00:00', 1, 1, 2);

-- --------------------------------------------------------

--
-- Структура таблицы `services`
--

CREATE TABLE IF NOT EXISTS `services` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `clinic_id` int(11) NOT NULL,
  `name` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cost` int(11) NOT NULL,
  `duration` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=5 ;

--
-- Дамп данных таблицы `services`
--

INSERT INTO `services` (`id`, `clinic_id`, `name`, `cost`, `duration`) VALUES
(1, 1, 'Удаление зуба', 1300, 30),
(2, 1, 'Профилактический осмотр', 500, 15),
(3, 1, 'Установка пломбы', 1500, 25),
(4, 1, 'Осветление', 3500, 15);

-- --------------------------------------------------------

--
-- Структура таблицы `stuff`
--

CREATE TABLE IF NOT EXISTS `stuff` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `clinic_id` int(11) NOT NULL,
  `fio` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `spec` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `time` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=3 ;

--
-- Дамп данных таблицы `stuff`
--

INSERT INTO `stuff` (`id`, `clinic_id`, `fio`, `spec`, `time`) VALUES
(1, 1, 'Иванов Иван Иванович', 'Стоматолог', 30),
(2, 1, 'Подыганов Константин Эдуардович', 'Врач', 30);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `clinic_id` int(11) NOT NULL,
  `login` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `clinic_id`, `login`, `password`) VALUES
(1, 1, 'user', 'password');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
