import db from '../config/db.js';

class Product {
    static async getAll() {
        const connection = await db.getConnection();
        try {
            const [rows] = await connection.query(`SELECT * FROM products`)
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

    static async addProduct(productName, price, productDesc, imgSrc){
        const connection = await db.getConnection();
        try {
            const [rows] = await connection.query(
                `INSERT INTO products(name, price, descr, imgUrl1, imgUrl2)
                  VALUES (?, ?, ?, ?, ?)
            `, [productName, price, productDesc, imgSrc[0], imgSrc[1]])
            return rows;
        } catch(e) {
            console.error(e)
            return {
                error: 'There was an error adding a product.'
            }
         } finally {
            connection.release();
         }
    }

    static async getAllStockStatus() {
        const connection = await db.getConnection();
        try {
            const [rows] = await connection.query(`
                SELECT
                    name,
                    img_url,
                    price,
                    dsc,
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
        const connection = await db.getConnection();
        try {
            const [rows] = await connection.query(`
                WITH rec AS (
                    SELECT name, img, price, descr
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