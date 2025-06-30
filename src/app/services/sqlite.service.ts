import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root'
})
export class SqliteService {
  sqlite: SQLiteConnection;
  db: SQLiteDBConnection | null = null;

  constructor() {
    this.sqlite = new SQLiteConnection(CapacitorSQLite);
  }

  async initDB() {
  try {
    const dbName = 'donaciones-db';

    this.db = await this.sqlite.createConnection(dbName, false, 'no-encryption', 1, false);
    await this.db.open();

    const createTable = `
      CREATE TABLE IF NOT EXISTS donaciones (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user TEXT,
        nombrecomun TEXT,
        nombrecientifico TEXT,
        tipo TEXT,
        caracteristicas TEXT,
        uso TEXT,
        foto TEXT
      );
    `;
    await this.db.execute(createTable);
    console.log('Tabla donaciones creada o ya existe.');
  } catch (err) {
    console.error('Error al iniciar la BD:', err);
  }
}

  async guardarDonacion(planta: any, user: string) {
    if (!this.db) return;
    const sql = `
      INSERT INTO donaciones (user, nombrecomun, nombrecientifico, tipo, caracteristicas, uso, foto)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
      user,
      planta.nombrecomun,
      planta.nombrecientifico,
      planta.tipo,
      planta.caracteristicas,
      planta.uso,
      planta.foto,
    ];

    await this.db.run(sql, values);
    console.log('Donación guardada.');
  }

  async obtenerDonaciones(user: string): Promise<any[]> {
    if (!this.db) return [];
    const res = await this.db.query('SELECT * FROM donaciones WHERE user = ?', [user]);
    return res.values || [];
  }
}
