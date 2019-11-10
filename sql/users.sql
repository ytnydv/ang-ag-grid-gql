/*
 Navicat Premium Data Transfer

 Source Server         : mysql_local_uwamp
 Source Server Type    : MySQL
 Source Server Version : 50711
 Source Host           : localhost:3306
 Source Schema         : test_db

 Target Server Type    : MySQL
 Target Server Version : 50711
 File Encoding         : 65001

 Date: 09/11/2019 20:05:55
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` mediumint(8) NOT NULL AUTO_INCREMENT,
  `userid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `role` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `first_name` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `last_name` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `sex` varchar(6) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `email` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `website` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `avatar` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `dob` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `country` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `state` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `city` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `pin` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `contact` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `address` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `profession` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `sec_que` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `sec_ans` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `about_me` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `registration_date` datetime(0) NULL DEFAULT NULL,
  `CRUDSTAMP` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 24 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'admin', 'ADMIN', NULL, NULL, NULL, NULL, '$2a$08$BQOl/jyiXXuCXjVGY6HvGe1StGS1y8JHuoxUjNzIdXR5q9QB6N2pG', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2019-08-12 18:06:32');
INSERT INTO `users` VALUES (23, 'maxxx', 'ADMIN', NULL, NULL, NULL, NULL, '$2a$08$jdTAJx4AHMj2o7fB9YNq2eMrlhZ2RcPii8YOKUgV9c7nJtijq6yKq', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2019-09-03 23:21:51');
INSERT INTO `users` VALUES (21, 'maxxx', 'ADMIN', NULL, NULL, NULL, NULL, '$2a$08$6XrrrJFZIOrJ36pnXdP6R.URCjJZ3I5rHNV9sdud35ztUte7d1mR6', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2019-08-12 01:38:06');

SET FOREIGN_KEY_CHECKS = 1;
