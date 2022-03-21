import squilite3 from 'sqlite3'

const DATABASE_FILE = process.env.DATABASE_FILE;
if(!DATABASE_FILE)
  throw new Error("DATABASE_FILE não informado")


export const openConnection = () =>{
  const db = new squilite3.Database(DATABASE_FILE)
  return db;
}

export const dbQuery=(query: string, params?: any[])=>{
  const db = openConnection()
  return new Promise<any[]>((resolve, rejects)=>{
    db.all(query,params,(err, rows)=>{
      if(err)
        rejects(err)
      else
        resolve(rows)
    })
  })
  .finally(()=>{
    db.close()
  })

}