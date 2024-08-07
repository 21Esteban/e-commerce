//aqui vamos a hacer la logica para obtener los productos

import { tesloApi } from "@/api/tesloApi"
import type{ Product } from "../interfaces/products.interface"
import { getProductImageAction } from "./get-product-image.action"

export const getProductsAction = async (page:number = 1,limit:number=10) =>{
    try {
        const {data} = await tesloApi.get<Product[]>(`/products?limit=${limit}&offset=${page*limit}`)
        
        return data.map(product=>{
            return{
                ...product,
                images:product.images.map(getProductImageAction)
            }
        })


    } catch (error:any) {
        console.log(error.message)
        throw new Error("Error obteniendo productos")
    }
}