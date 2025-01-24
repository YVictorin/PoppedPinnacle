import db from '../config/db';

class User {
    static async getAll() {
        const connection = db.getConnection();
        try {
            const [rows] = connection.query(`SELECT * FROM user`)
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

}

export default User