"use client"

import { useProducts } from "@/context/useProducts"

interface ProductsListProps{

}

export function ProductsList(props: ProductsListProps){
    const { data } = useProducts()
    return(
        <></>
    )
}