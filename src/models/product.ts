import { dbQuery } from "../services/db"

export type Product = {
    id: number,
    name: string,
    price:number
}

const insertProduct = (product: Product) =>{
    dbQuery('INSERT INTO product (name, price) VALUES(?, ?)',[product.name, product.price])
}