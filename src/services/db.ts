import squilite3 from 'sqlite3'

const DATABASE_FILE = process.env.DATABASE_FILE;
if(!DATABASE_FILE)
  throw new Error("DATABASE_FILE não informado")


export const openConnection = () =>{
  let db = new squilite3.Database(DATABASE_FILE)
  return db;
}