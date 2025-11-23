

-- Create DB
CREATE DATABASE if not EXISTS Buoi4
use `Buoi4`

-- Create Table
--Food_type
CREATE TABLE `Food_type` (
  `type_id` int PRIMARY KEY auto_increment,
  `type_name` varchar(255)
)

--Food
CREATE TABLE `Food`(
 `food_id` int PRIMARY key auto_increment,
 `food_name` varchar(255),
 `image` varchar(255),
 `price` FLOAT,
 `desc` varchar(255),
 `type_id` int ,
 FOREIGN key (`type_id`) REFERENCES `Food_type`(`type_id`)
)

--Sub_food
CREATE TABLE `Sub_food` (
 `sub_id` int PRIMARY key auto_increment,
 `sub_name` varchar(255),
 `sub_price` FLOAT,
 `food_id` int,
 FOREIGN key (`food_id`) REFERENCES `Food` (`food_id`)
)

--User
CREATE TABLE `User` (
  `user_id` int PRIMARY key auto_increment,
  `full_name` varchar(255),
  `email` varchar(255),
  `password` varchar(255)
)

--Order
CREATE TABLE `Order` (
 `user_id` int,
 `food_id` int,
 `amount` int,
 `code` varchar(255),
 `arr_sub_id` varchar(255),
 FOREIGN key (`food_id`) REFERENCES `Food` (`food_id`),
 FOREIGN key (`user_id`) REFERENCES `User` (`user_id`)
)

--Restaurent
CREATE TABLE `Restaurent` (
 `res_id` int PRIMARY key auto_increment,
 `res_name` varchar(255),
 `image` varchar(255),
 `desc` varchar(255)
)

--Rate_res
CREATE TABLE `Rate_res` (
 `user_id` int,
 `res_id` int,
 `amount` int,
 `date_rate` datetime,
 FOREIGN key (`res_id`) REFERENCES `Restaurent` (`res_id`),
 FOREIGN key (`user_id`) REFERENCES `User` (`user_id`)
)

-- Like_res
CREATE TABLE `Like_res` (
 `user_id` int,
 `res_id` int,
 `date_like` datetime,
 FOREIGN key (`res_id`) REFERENCES `Restaurent` (`res_id`),
 FOREIGN key (`user_id`) REFERENCES `User` (`user_id`)
)


-- Insert into Value

-- Food_type (10 bản ghi)
INSERT INTO `Food_type` (`type_name`) VALUES
('Fast Food'),
('Drink'),
('Dessert'),
('Asian Food'),
('Italian'),
('Mexican'),
('Healthy'),
('Seafood'),
('Bakery'),
('Snacks');

-- Food (10 bản ghi)
INSERT INTO `Food` (`food_name`, `image`, `price`, `desc`, `type_id`) VALUES
('Burger', 'burger.jpg', 50.0, 'Delicious beef burger', 1),
('Coke', 'coke.jpg', 15.0, 'Refreshing drink', 2),
('Ice Cream', 'icecream.jpg', 25.0, 'Sweet dessert', 3),
('Sushi', 'sushi.jpg', 100.0, 'Fresh sushi platter', 4),
('Pizza', 'pizza.jpg', 120.0, 'Cheesy Italian pizza', 5),
('Taco', 'taco.jpg', 60.0, 'Spicy Mexican taco', 6),
('Salad', 'salad.jpg', 40.0, 'Healthy green salad', 7),
('Shrimp', 'shrimp.jpg', 80.0, 'Grilled shrimp', 8),
('Bread', 'bread.jpg', 20.0, 'Freshly baked bread', 9),
('Chips', 'chips.jpg', 15.0, 'Crunchy snack', 10);

-- Sub_food (10 bản ghi)
INSERT INTO `Sub_food` (`sub_name`, `sub_price`, `food_id`) VALUES
('Extra Cheese', 10.0, 1),
('Fries', 20.0, 1),
('Whipped Cream', 5.0, 3),
('Soy Sauce', 2.0, 4),
('Extra Pepperoni', 15.0, 5),
('Guacamole', 10.0, 6),
('Croutons', 5.0, 7),
('Lemon Sauce', 8.0, 8),
('Butter', 3.0, 9),
('Salsa', 4.0, 10);

-- User (10 bản ghi)
INSERT INTO `User` (`full_name`, `email`, `password`) VALUES
('Nguyen Van A', 'a@example.com', '123456'),
('Tran Thi B', 'b@example.com', 'password'),
('Le Van C', 'c@example.com', 'pass123'),
('Pham Thi D', 'd@example.com', 'abc123'),
('Hoang Van E', 'e@example.com', '123abc'),
('Nguyen Thi F', 'f@example.com', 'qwerty'),
('Le Thi G', 'g@example.com', 'passw0rd'),
('Tran Van H', 'h@example.com', 'letmein'),
('Pham Van I', 'i@example.com', 'mypassword'),
('Hoang Thi J', 'j@example.com', 'secure123');

-- Order (10 bản ghi)
INSERT INTO `Order` (`user_id`, `food_id`, `amount`, `code`, `arr_sub_id`) VALUES
(1, 1, 2, 'ORD201', '1,2'),
(1, 3, 1, 'ORD202', '3'),

(2, 2, 1, 'ORD203', ''),

(3, 4, 2, 'ORD204', '4'),

(4, 5, 1, 'ORD205', '5'),
(4, 1, 1, 'ORD206', ''),

(5, 10, 1, 'ORD207', ''),

(6, 3, 2, 'ORD208', '3'),

(7, 8, 1, 'ORD209', '8'),

(8, 9, 2, 'ORD210', '9');



TRUNCATE table `Order`

-- Restaurent (10 bản ghi)
INSERT INTO `Restaurent` (`res_name`, `image`, `desc`) VALUES
('Pizza House', 'pizza.jpg', 'Famous for pizza'),
('Coffee Corner', 'coffee.jpg', 'Best coffee in town'),
('Sushi World', 'sushi.jpg', 'Fresh sushi daily'),
('Burger King', 'burger.jpg', 'Delicious burgers'),
('Taco Land', 'taco.jpg', 'Tasty tacos'),
('Healthy Bites', 'salad.jpg', 'Healthy meals'),
('Seafood Paradise', 'shrimp.jpg', 'Fresh seafood'),
('Bakery Hub', 'bread.jpg', 'Baked goods'),
('Snack Stop', 'chips.jpg', 'Quick snacks'),
('Dessert House', 'icecream.jpg', 'Sweet treats');

-- Rate_res (10 bản ghi)
INSERT INTO `Rate_res` (`user_id`, `res_id`, `amount`, `date_rate`) VALUES
(1, 1, 5, '2025-11-23 10:00:00'),
(2, 2, 4, '2025-11-23 11:00:00'),
(3, 3, 5, '2025-11-23 12:00:00'),
(4, 4, 3, '2025-11-23 13:00:00'),
(5, 5, 4, '2025-11-23 14:00:00'),
(6, 6, 5, '2025-11-23 15:00:00'),
(7, 7, 4, '2025-11-23 16:00:00'),
(8, 8, 5, '2025-11-23 17:00:00');


-- Like_res (10 bản ghi)
INSERT INTO `Like_res` (`user_id`, `res_id`, `date_like`) VALUES
(1, 1, '2025-11-22 08:10:00'),
(1, 3, '2025-11-22 09:00:00'),

(2, 4, '2025-11-22 11:00:00'),

(3, 2, '2025-11-22 12:20:00'),

(4, 7, '2025-11-22 13:00:00'),
(4, 5, '2025-11-22 13:10:00'),

(5, 9, '2025-11-22 14:00:00'),

(6, 6, '2025-11-22 15:00:00'),
(6, 6, '2025-11-22 15:20:00'),

(7, 8, '2025-11-22 16:10:00'),

(8, 3, '2025-11-22 16:40:00');



-- Querry

-- Câu 1: Tìm 5 người đã like nhà hàng nhiều nhất
  select u.user_id, u.full_name as "Họ tên", u.email, count(l.user_id) as total_like
  from Like_res l
  join `User` u on l.user_id = u.user_id
  group by l.user_id
  order by total_like DESC
  limit 5
  
-- Câu 2: Tìm 2 nhà hàng có lượt like nhiều nhất
  select r.res_name as "Tên nhà hàng", count(l.res_id) as total_like
  from Like_res l 
  join `Restaurent` r on l.res_id = r.res_id
  group by l.res_id
  order by total_like desc
  limit 2
-- Câu 3: Tìm người đặt hành nhiều nhát
  select u.full_name as "Họ tên", count(o.user_id) as total_order
  from `Order` o
  join `User` u on o.user_id = u.user_id
  join `Food` f on o.food_id = f.food_id
  group by o.user_id
  order by total_order DESC
  limit 1
  
-- Câu 4: Tìm người dùng không hoạt động trong hệ thống (không đặt hàng, không like, không đánh giá nhà hàng)
  select u.full_name as "Người dùng không hoạt động", u.email, u.user_id
  from `User` u
  left join `Order` o on u.user_id = o.user_id
  left join Like_res l on u.user_id = l.user_id
  left join Rate_res r on u.user_id = r.user_id
  where o.user_id is null and l.user_id is null and r.user_id is null;























