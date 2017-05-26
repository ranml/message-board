/*
 Navicat Premium Data Transfer

 Source Server         : 本地数据库
 Source Server Type    : MySQL
 Source Server Version : 50718
 Source Host           : localhost
 Source Database       : comments

 Target Server Type    : MySQL
 Target Server Version : 50718
 File Encoding         : utf-8

 Date: 05/26/2017 17:06:29 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `comment`
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `comment` text NOT NULL,
  `username` varchar(20) NOT NULL,
  `createAt` varchar(20) DEFAULT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `comment`
-- ----------------------------
BEGIN;
INSERT INTO `comment` VALUES ('12', '终于做完了！维恩er', 'admin', '1495784238070', '1'), ('13', '累死我了', '冉茂亮', '1495786973671', '3'), ('14', '真的好累啊', '冉茂亮', '1495787006743', '3'), ('15', '什么才是冒菜正确打开方式？最懂吃辣的人绝不会放过夏季！', 'admin', '1495789048155', '1'), ('16', '腐国的夏天猝不及防就在眼前了！这两天走在伦敦大街上已经满眼短袖短裤的小伙伴，迫不及待的英国人，很快就要在公园里呈点状分布……', '冉茂亮', '1495789075287', '3');
COMMIT;

-- ----------------------------
--  Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `user`
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES ('1', 'admin', 'e10adc3949ba59abbe56e057f20f883e'), ('3', '冉茂亮', 'e10adc3949ba59abbe56e057f20f883e'), ('5', 'ranml', 'e10adc3949ba59abbe56e057f20f883e');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
