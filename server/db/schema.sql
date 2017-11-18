
-- Create a table called 'products' which will contain the store inventory --
CREATE TABLE products(
	item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(50) NOT NULL,
    sku INTEGER NOT NULL,
    category VARCHAR(50) NOT NULL,
    price DOUBLE NOT NULL,

    stock_quantity INTEGER(10) NOT NULL,
    PRIMARY KEY(item_id)
);

