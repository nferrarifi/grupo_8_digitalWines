-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-06-2022 a las 19:18:13
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `digitalwines`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `producto_id` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `precio` int(11) DEFAULT NULL,
  `descuento` int(11) DEFAULT NULL,
  `categoria` varchar(45) DEFAULT NULL,
  `tamaño` varchar(45) DEFAULT NULL,
  `imagen` varchar(45) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `destacado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`producto_id`, `nombre`, `precio`, `descuento`, `categoria`, `tamaño`, `imagen`, `descripcion`, `destacado`) VALUES
(1, 'Vino mrsu', 850, 51, 'Ícono', '375', '16071', 'Unsp fx low end l femr, 7thH', 1),
(2, 'Vino wibj', 3137, 29, 'Reserva', '375', '33478', 'Bunionette of unspecified foot', 1),
(3, 'Vino vtfe', 2808, 56, 'Reserva', '375', '17194', 'Other subluxation of left radial head, sequela', 1),
(4, 'Vino jefe', 4291, 62, 'Gran reserva', '375', '00014', 'Furuncle of back [any part, except buttock]', 1),
(5, 'Vino wmxo', 2309, 86, 'Gran reserva', '750', '02896', 'Adverse effect of other parasympathomimetics [cholinergics]', 1),
(6, 'Vino ihgz', 1333, 37, 'Entry level', '750', '60853', 'Disorders of olfactory nerve', 1),
(7, 'Vino aqcg', 2945, 24, 'Gran reserva', '375', '96860', 'Ant disp fx of sternal end unsp clavicle, 7thD', 0),
(8, 'Vino dfhi', 4318, 20, 'Gran reserva', '750', '58267', 'Blister (nonthermal) of lower back and pelvis, sequela', 0),
(9, 'Vino thmk', 2169, 15, 'Reserva', '375', '50075', 'Cutaneous follicle center lymphoma, intra-abd lymph nodes', 1),
(10, 'Vino ypoc', 4499, 3, 'Ícono', '750', '88167', 'Superficial frostbite of neck, sequela', 1),
(11, 'Vino sajc', 1999, 13, 'Reserva', '375', '01130', 'Unsp physeal fracture of upper end radius, left arm, sequela', 0),
(12, 'Vino cdfl', 2814, 14, 'Entry level', '375', '53599', 'Secondary syphilitic oculopathy', 1),
(13, 'Vino natt', 2948, 18, 'Gran reserva', '750', '50906', 'Adjustment disorders', 1),
(14, 'Vino pvma', 2404, 84, 'Entry level', '750', '41761', 'Other superficial bite of left ring finger', 0),
(15, 'Vino irzo', 809, 92, 'Ícono', '750', '22866', 'War op involving indirect blast effect of nuclear weapon', 0),
(16, 'Vino newq', 4059, 73, 'Entry level', '375', '45864', 'Unspecified enophthalmos', 1),
(17, 'Vino fkhy', 2176, 10, 'Reserva', '375', '12480', 'War op w direct blast effect of nuclear weapon, civ, sequela', 0),
(18, 'Vino xvaj', 2678, 25, 'Entry level', '375', '73331', 'Oth diabetes mellitus with unspecified complications', 0),
(19, 'Vino vizp', 1297, 82, 'Reserva', '750', '85317', 'Western equine encephalitis', 0),
(20, 'Vino nwdp', 1453, 12, 'Reserva', '375', '32052', 'Osteochondropathy, unspecified multiple sites', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `transacciones`
--

CREATE TABLE `transacciones` (
  `transaccion_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `producto_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `transacciones`
--

INSERT INTO `transacciones` (`transaccion_id`, `user_id`, `producto_id`) VALUES
(1, 19, 13),
(2, 4, 6),
(3, 3, 5),
(4, 15, 3),
(5, 3, 20),
(6, 20, 16),
(7, 5, 16),
(8, 12, 17),
(9, 8, 1),
(10, 6, 15),
(11, 20, 13),
(12, 10, 17),
(13, 12, 5),
(14, 1, 6),
(15, 14, 18),
(16, 6, 4),
(17, 3, 8),
(18, 17, 16),
(19, 6, 1),
(20, 3, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `usuario_id` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `imagen` varchar(100) DEFAULT NULL,
  `admin` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`usuario_id`, `nombre`, `apellido`, `password`, `email`, `direccion`, `imagen`, `admin`) VALUES
(1, 'Madeline', 'Sertin', 'sarasa', 'msertin0@buzzfeed.com', 'ocbiakv 40545', '389000', 0),
(2, 'Viva', 'Pressman', 'sarasa', 'vpressman1@soup.io', 'mmuqfmf 78488', '220423', 0),
(3, 'Lisbeth', 'Mordin', 'sarasa', 'lmordin2@desdev.cn', 'cqttnjv 05828', '791875', 0),
(4, 'Rebe', 'Saket', 'sarasa', 'rsaket3@hatena.ne.jp', 'jfpjguz 41642', '991160', 0),
(5, 'Ninnetta', 'Heck', 'sarasa', 'nheck4@delicious.com', 'tsznyyl 08984', '316265', 0),
(6, 'Elena', 'Sheffield', 'sarasa', 'esheffield5@yellowpages.com', 'cvhrbhw 25313', '429315', 0),
(7, 'Meredeth', 'Fawdry', 'sarasa', 'mfawdry6@fema.gov', 'bbdmdkm 60405', '715016', 0),
(8, 'Bobbi', 'Board', 'sarasa', 'bboard7@fastcompany.com', 'jyyhdnq 05714', '244008', 0),
(9, 'Averyl', 'Cleyburn', 'sarasa', 'acleyburn8@skype.com', 'ugluebp 97920', '862536', 0),
(10, 'Olvan', 'Banane', 'sarasa', 'obanane9@dailymail.co.uk', 'ymsjskx 46253', '103458', 0),
(11, 'Isidro', 'Hiom', 'sarasa', 'ihioma@simplemachines.org', 'zrhdxny 74926', '217792', 0),
(12, 'Piggy', 'Doers', 'sarasa', 'pdoersb@wikimedia.org', 'fgdrenj 49104', '952598', 0),
(13, 'Theadora', 'Klauber', 'sarasa', 'tklauberc@ebay.com', 'ntgzaxp 47480', '703157', 0),
(14, 'Jeannie', 'Sousa', 'sarasa', 'jsousad@wikimedia.org', 'xmznafp 32504', '899650', 0),
(15, 'Far', 'Rudinger', 'sarasa', 'frudingere@answers.com', 'slmhxaf 58698', '486298', 0),
(16, 'Cesaro', 'Neame', 'sarasa', 'cneamef@aboutads.info', 'wnvtqic 70453', '359224', 0),
(17, 'Desmond', 'Village', 'sarasa', 'asdasd@gmail.com', 'tmapwzd 52491', '839984', 0),
(18, 'Kyla', 'Melville', 'sarasa', 'kmelvilleh@storify.com', 'nuacmrg 85431', '224885', 0),
(19, 'Maren', 'Gagie', 'sarasa', 'mgagiei@patch.com', 'axwlslk 01952', '319789', 0),
(20, 'Emili', 'Whalebelly', 'sarasa', 'ewhalebellyj@friendfeed.com', 'xkabubz 55128', '004160', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`producto_id`);

--
-- Indices de la tabla `transacciones`
--
ALTER TABLE `transacciones`
  ADD PRIMARY KEY (`transaccion_id`),
  ADD KEY `usuario_id` (`user_id`),
  ADD KEY `producto_id` (`producto_id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`usuario_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `producto_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `transacciones`
--
ALTER TABLE `transacciones`
  MODIFY `transaccion_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `usuario_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `transacciones`
--
ALTER TABLE `transacciones`
  ADD CONSTRAINT `producto_id` FOREIGN KEY (`producto_id`) REFERENCES `producto` (`producto_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `usuario_id` FOREIGN KEY (`user_id`) REFERENCES `usuario` (`usuario_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
