const Database = require("./config")

const initDb = {
  async init(){
    const db = await Database()

    await db.exec(`CREATE TABLE rooms (
      id INTERGER PRIMARY KEY,
      pass TEXT
    )`);

    await db.exec(`CREATE TABLE questions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT,
      read INT
    )`);

    await db.close()
  }
}

initDb.init();