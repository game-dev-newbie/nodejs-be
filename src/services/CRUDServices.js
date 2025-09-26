const connection = require("../config/database");
class Services {
  async getAllUsers() {
    const db = await connection.connect();
    // Example query to fetch data from a table named 'Users'
    const [result, field] = await db.execute(`SELECT * FROM Users`);
    return result;
  }
  async getUserId(id){
    const db = await connection.connect();
    const [result, field] = await db.execute(`SELECT * FROM Users WHERE id = ?`, [id]);
    const userId = id && result && result.length > 0 ? result : [];
    return userId;
  }
}
module.exports = Services;
