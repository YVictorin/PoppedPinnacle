import db from '../config/db';

class Product {
    static async getAll() {
        const connection = db.getConnection();
        try {
            const [rows] = await connection.query(`SELECT * FROM product`)
            return rows;
        } catch(e) {
            console.error(e)
            return {
                error: 'There was an error getting all products.'
            }
         } finally {
            connection.release();
         }
    }

    static async getAllStockStatus() {
        const connection = db.getConnection();
        try {
            const [rows] = await connection.query(`
                SELECT
                    name,
                    img,
                    price,
                    desc,
                    CASE WHEN stock = 0 THEN 'Out of Stock'
                    WHEN stock < 10 THEN 'Low Stock'
                    ELSE 'In Stock'
                END AS stock_status
                FROM products
            `)
        } catch(e) {
            console.error(e)
            return {
                error: 'There was an error getting all products stock status.'
            }
        } finally {
            connection.release()
        }
    }

    static async recommendProductsAbovePrice(price) {
        const connection = db.getConnection();
        try {
            const [rows] = await connection.query(`
                WITH rec AS (
                    SELECT name, img, price, desc
                    FROM product
                    WHERE price >= ?
                )
                SELECT 
                    CONCAT(u.first_name, u.last_name) AS customer_name,
                    rec.name,
                    rec.img,
                    rec.price,
                    rec.desc
                FROM users AS u
                INNER JOIN rec
                USING(id);
            `, [price])
            return rows
        } catch (e) {
            console.error(e)
            return {
                error: 'There was an error getting recommended products.'
            }
        } finally {
            connection.release();
        }
    }
}

export default Product