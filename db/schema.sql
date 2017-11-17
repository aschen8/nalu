-- Create a database called 'HomeBusiness' and switch into it for this activity --
CREATE DATABASE business;

USE business;

-- Create a table called 'products' which will contain the store inventory --
CREATE TABLE products(
	item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
	sku INTEGER(10) NOT NULL,
    product_name VARCHAR(50) NOT NULL,
    category VARCHAR(50) NOT NULL,
    price INTEGER(10) NOT NULL,

    stock_quantity INTEGER(10) NOT NULL,
    PRIMARY KEY(item_id)
);

