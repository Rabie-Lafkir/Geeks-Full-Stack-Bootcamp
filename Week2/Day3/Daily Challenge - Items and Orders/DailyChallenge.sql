-- 1. Users Table
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL
);

-- 2. Product Orders Table
CREATE TABLE product_orders (
    order_id SERIAL PRIMARY KEY,
    order_date DATE DEFAULT CURRENT_DATE,
    user_id INT REFERENCES users(user_id)
);

-- 3. Items Table
CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(100) NOT NULL,
    price NUMERIC(10, 2) NOT NULL CHECK (price >= 0),
    order_id INT REFERENCES product_orders(order_id) ON DELETE CASCADE
);

-- Insert users
INSERT INTO users (username) VALUES ('Alice'), ('Bob');

-- Insert orders
INSERT INTO product_orders (user_id) 
VALUES 
((SELECT user_id FROM users WHERE username = 'Alice')),
((SELECT user_id FROM users WHERE username = 'Bob'));

-- Insert items
INSERT INTO items (item_name, price, order_id) VALUES
('Book', 15.50, 1),
('Pen', 2.25, 1),
('Notebook', 5.00, 1),
('Laptop', 999.99, 2),
('Mouse', 25.00, 2);

-- FUNCTION 1 : Total Price per Order

CREATE OR REPLACE FUNCTION total_order_price(orderId INT)
RETURNS NUMERIC AS $$
DECLARE
    total NUMERIC;
BEGIN
    SELECT SUM(price) INTO total
    FROM items
    WHERE order_id = orderId;

    RETURN COALESCE(total, 0);
END;
$$ LANGUAGE plpgsql;

-- Example usage:

SELECT total_order_price(1);

-- FUNCTION 2 : Total Price per Order for a User 

CREATE OR REPLACE FUNCTION user_order_total(userId INT, orderId INT)
RETURNS NUMERIC AS $$
DECLARE
    total NUMERIC;
BEGIN
    SELECT SUM(i.price) INTO total
    FROM items i
    JOIN product_orders po ON i.order_id = po.order_id
    WHERE po.user_id = userId AND po.order_id = orderId;

    RETURN COALESCE(total, 0);
END;
$$ LANGUAGE plpgsql;

-- Example usage:
SELECT user_order_total(1, 1);
SELECT user_order_total(2, 2);

