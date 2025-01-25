import db from '../config/db.js';

class User {
    static async getAll() {
        const connection = await db.getConnection();
        try {
            const [rows] = await connection.query(`SELECT * FROM users`)
            return rows;
        } catch(e) {
            console.error(e);
            return {
                error: 'There was an error getting all users.'
            }
        } finally {
            connection.release();
        } 
    }

    static async addUser(firstName, lastName, password, email) {
        const connection = await db.getConnection();
        try {
            await connection.query(
                `INSERT INTO users (first_name, last_name, password, email)
                 VALUES(?, ?, ?, ?)
            `, [firstName, lastName, password, email])
        } catch(e) {
            console.error(e);
            return {
                error: 'There was an error getting inserting a user.'
            }
        } finally {
            connection.release();
        } 
    }

    static async find(email) {
        const connection = await db.getConnection();
        try {
            const [rows] = await connection.query(`SELECT * FROM users WHERE email = ?`, [email])
            return rows[0];
        } catch(e) {
            console.error(e);
            return {
                error: 'There was an error finding user.'
            }
        } finally {
            connection.release();
        } 
    }

}

export default User