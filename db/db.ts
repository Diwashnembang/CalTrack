import * as SQLite from 'expo-sqlite';

// Opens or creates a local database file named "myApp.db"
export async function getDatabase() {
  const db = await SQLite.openDatabaseAsync('CalTrack');
  return db;
}

// Initialize tables
export async function initializeDatabase() {
  const db = await getDatabase();
  
  await db.execAsync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT, 
      name TEXT NOT NULL, 
      age INTEGER
    );
  `);
  console.log('Database initialized successfully');
}