create database business;
	use business;


-- Create a table called 'products' which will contain the store inventory --
CREATE TABLE products(
	item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(50) NOT NULL,
    category VARCHAR(50) NOT NULL,
    sku INTEGER NOT NULL,
    description varchar(140),
    image VARCHAR(2083),
    cost DECIMAL(13,2) NOT NULL,
    price DECIMAL(13,2) not null,
    stock_quantity INTEGER(10) NOT NULL,
    reorder_quantity integer(10) not null,
    PRIMARY KEY(item_id)
);

