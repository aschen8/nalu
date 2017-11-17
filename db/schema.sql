-- Create a database called 'HomeBusiness' and switch into it for this activity --
CREATE DATABASE business;

USE business;

-- Create a table called 'products' which will contain the store inventory --
CREATE TABLE products(
	item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price INTEGER(10) NOT NULL,

    stock_quantity INTEGER(10) NOT NULL,
    PRIMARY KEY(item_id)
);

-- Insert data into the 'products' table --
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("T-shirt/Shorts/Pants", "Womens Clothing", 24.99, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("T-shirt/Shorts/Pants", "Mens Clothing", 24.99, 15);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("T-shirts/Shorts/Pants", "Childrens Clothing", 39.99, 20);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Shoes", "Womens Shoes", 99.00, 5);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Shoes", "Mens Shoes", 89.00, 25);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Shoes", "Children Shoes", 25.00, 2);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Jackets", "Outdoor Clothing", 100.00, 7);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Socks", "Under Garments", 10.00, 12);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Hair Spray", "Hair Products", 23.99, 5);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Green Eggs & Ham", "Books", 21.00, 1);
