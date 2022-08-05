import { TProduct } from "../models/products";
import instance from "./config";

export const add = (product: any) => {
    return instance.post("/products", product);
};


// export const add = (product: TProduct) => {
//     return instance.post("/products", product)
// }

// export const getAll = () => {
//     return instance.get("/products")
// }

export const getItem = (_id: TProduct) => {
    return instance.get(`/products/${_id}`)
}

export const updateItem = (product: TProduct) => {
    return instance.patch(`/products/${product._id}`, product)
}

export const removeItem = (_id: TProduct) => {
    return instance.delete(`/products/${_id}`)
}